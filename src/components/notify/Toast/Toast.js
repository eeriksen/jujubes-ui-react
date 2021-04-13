import React from "react";
import classNames from "classnames";
import styles from "./Toast.scss";
import Notification from "rc-notification";

let defaultDuration = 3;
let messageInstance;
let key = 1;

function getMessageInstance() {
    if (!messageInstance) {
        Notification.newInstance(
            {
                transitionName: "fade",
                style: {
                    top: "auto",
                    bottom: "20px"
                }
            },
            (notification) => {
                messageInstance = notification;
            }
        );
    }

    return messageInstance;
}

const NoticeInstance = (content, duration, type, onClose) => {
    let instance = getMessageInstance();
    const hasPageNav = document.getElementById("page_nav_notice") !== null;
    instance.notice({
        key,
        duration: duration || defaultDuration,
        style: {},
        content: (
            <div className={classNames(styles.base, styles[type], {
                [styles.evadePageNav]: hasPageNav
            })}>
                <span className={styles.content}>{content}</span>
            </div>
        ),
        onClose
    });

    return (function () {
        let target = key++;
        return function () {
            instance.removeNotice(target);
        };
    })();
};

export const Toast = {
    info(content, duration, onClose) {
        return NoticeInstance(content, duration, "info", onClose);
    },

    success(content, duration, onClose) {
        return NoticeInstance(content, duration, "success", onClose);
    },

    warning(content, duration, onClose) {
        return NoticeInstance(content, duration, "warning", onClose);
    },

    error(content, duration, onClose) {
        return NoticeInstance(content, duration, "error", onClose);
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
