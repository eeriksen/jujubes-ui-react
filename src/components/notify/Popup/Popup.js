import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Popup.scss";
import { Overlay } from "../../layout/Overlay";
import { Clickable } from "../../button/Clickable";
import { Icon } from "../../graphic/Icon";

export const Popup = ({ visible, size, onClose, children }) => {
    return visible ? (
        <div
            className={classNames(styles.base, {
                [styles.sizeAuto]: size === "auto",
                [styles.sizeMedium]: size === "medium",
                [styles.sizeFull]: size === "full",
            })}
            onClick={onclose}
        >
            <div
                className={styles.box}
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                {/* Close button */}
                {onClose ? (
                    <Clickable onClick={onClose} className={styles.close} cyp="popupClose">
                        <Icon className={styles.icon} name="close" />
                    </Clickable>
                ) : null}

                {visible ? children : null}
            </div>
            <div className={styles.overlay}>
                <Overlay visible={true} scrollControl={false} />
            </div>
        </div>
    ) : null;
};

Popup.propTypes = {
    /**
     * Show/hide popup
     */
    visible: PropTypes.bool,
    /**
     * Adjust the max size of the popup
     */
    size: PropTypes.oneOf(["auto", "medium", "full"]),
    /**
     * Close button click callback
     */
    onClose: PropTypes.func
};

Popup.defaultProps = {
    visible: true
};
