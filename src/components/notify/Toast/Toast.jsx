import React from "react"
import classNames from "classnames"
import styles from "./styles.scss"
import Notification from "rc-notification"

let defaultDuration = 3;
let messageInstance;
let key = 1;

function getMessageInstance() {
    if(!messageInstance){
        Notification.newInstance({
            transitionName: 'fade',
            style: {
                top: "auto",
                bottom: "20px"
            }
        }, notification => {
            messageInstance = notification;
        });
    }

    return messageInstance;
}


function notice(content, duration, type, onClose) {

    const classes = classNames(styles.base, styles[type]);

    let instance = getMessageInstance();
    instance.notice({
        key,
        duration: duration || defaultDuration,
        style: {},
        content: (
            <div className={classes}>
                <span className={styles.content}>
                    {content}
                </span>
            </div>
        ),
        onClose
    });

    return (function () {
        let target = key++;
        return function () {
            instance.removeNotice(target);
        };
    }());

}


export default {

    info(content, duration, onClose) {
        return notice(content, duration, 'info', onClose);
    },

    success(content, duration, onClose) {
        return notice(content, duration, 'success', onClose);
    },

    error(content, duration, onClose) {
        return notice(content, duration, 'error', onClose);
    },

    config(options) {
        if (options.duration !== undefined) {
            defaultDuration = options.duration;
        }
    },

    destroy() {
        if (messageInstance) {
            messageInstance.destroy();
            messageInstance = null;
        }
    }

};
