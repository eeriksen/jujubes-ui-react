import axios from "./axios/axios";

let uploadQueue = [];
let uploadInProgress = false;

/**
 * Upload file
 * @param file
 * @param endpoint
 * @param parameters
 */
export const uploadFile = (file, endpoint, parameters, progressCallback) => {
    // Create promise for this upload job
    let promiseResolve = null;
    let promiseReject = null;

    const uploadPromise = new Promise((resolve, reject) => {
        promiseResolve = resolve;
        promiseReject = reject;
    });

    // Upload job ID
    const uploadJobId = _getNextUploadJobId();

    // Create the upload
    const newUpload = {
        id: uploadJobId,
        file: file,
        endpoint: endpoint,
        parameters: parameters,

        promise: {
            resolve: promiseResolve,
            reject: promiseReject
        },

        progressCallback: progressCallback,

        added: new Date(),
        started: null,
        finished: null,
        percentComplete: 0,

        responseData: null,
        uploadUrl: null,
        error: null
    };

    // Add upload job to queue
    uploadQueue.push(newUpload);

    // Start processing
    _processQueue();

    // Return promise
    return uploadPromise;
}

/**
 * Process upload queue
 * @returns {boolean}
 * @private
 */
function _processQueue() {
    // Wait if upload is in progress
    if (uploadInProgress) {
        return false;
    }

    // Get next upload job in line
    let job = _getNextUploadJob();

    // Set upload status
    if (!job) {
        uploadInProgress = false;
        return false;
    }

    // Job started
    uploadInProgress = true;
    job.started = new Date();

    // Prepare
    _prepareUpload(job)
        .then(function () {
            // Upload
            _uploadFile(job)
                .then(function (data) {
                    _finishUploadJob(job);
                })
                .catch(function (data) {
                    job.error = data;
                    _finishUploadJob(job);
                });
            // ----------------------------
        })
        .catch(function (data) {
            job.error = data;
            _finishUploadJob(job);
        });
    // ----------------------------
}

/**
 * Get next upload job
 * @returns {*}
 * @private
 */
function _getNextUploadJob() {
    for (var i = 0; i < uploadQueue.length; i++) {
        if (uploadQueue[i].finished === null) {
            return uploadQueue[i];
        }
    }
    return null;
}

/**
 * Get next upload job id
 * @returns {*}
 * @private
 */
function _getNextUploadJobId() {
    if (!uploadQueue || !uploadQueue.length) {
        return 1;
    } else {
        return uploadQueue[uploadQueue.length - 1].id + 1;
    }
}

/**
 * Prepare upload job
 * @param job
 * @private
 */
function _prepareUpload(job) {
    return new Promise((resolve, reject) => {
        return axios
            .post(job.endpoint, {
                contentType: job.file.type,
                filename: job.file.name,
                fileSize: job.file.size,
                ...job.parameters
            })
            .then(function (response) {
                // Get the upload URL
                job.uploadUrl = response.headers.location;

                // Response data (Can be FileData)
                job.responseData = response.data;

                resolve();
            })
            .catch(function (error) {
                reject(error.response ? error.response.data : error);
            });
    });
}

/**
 * Upload file
 * @param job
 * @private
 */
function _uploadFile(job) {
    return new Promise((resolve, reject) => {
        var config = {
            timeout: 1000 * 60 * 60, // 60 minutes
            headers: {
                "Content-Type": job.file.type
            },
            onUploadProgress: function (progressEvent) {
                var percentCompleted = Math.round(
                    (progressEvent.loaded / progressEvent.total) * 100
                );
                job.percentComplete = percentCompleted;
                job.progressCallback && job.progressCallback(percentCompleted);
            }
        };

        axios
            .put(job.uploadUrl, job.file, config)
            .then(function (res) {
                resolve(res);
            })
            .catch(function (error) {
                reject(error.response ? error.response.data : error);
            });
    });
}

/**
 * Set upload job as finished
 * @param job
 * @private
 */
function _finishUploadJob(job) {
    // Set job as finished
    job.finished = new Date();
    job.percentComplete = 100;

    // Resolve/reject job
    if (!job.error) {
        job.promise.resolve(job.responseData);
    } else {
        job.promise.reject(job.error);
    }

    // Update uploading status
    uploadInProgress = false;

    // Process next
    _processQueue();
}
