import React, { useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Overlay.scss";

import scrollUtils from "../../../utils/scrollUtils";
import { Clickable } from "../../button/Clickable";

export const Overlay = ({ visible, className, style, onClick, scrollControl }) => {
    useEffect(() => {
        if (visible && scrollControl) {
            scrollUtils.disableBodyScroll();
        } else {
            scrollUtils.enableBodyScroll();
        }
        return () => {
            scrollUtils.enableBodyScroll();
        };
    }, [visible]);

    return (
        <Clickable
            block
            style={style}
            className={classNames(
                styles.base,
                {
                    [styles.visible]: visible
                },
                className
            )}
            onClick={onClick}
        />
    );
};

Overlay.defaultValues = {
    visible: false,
    scrollControl: true
};

Overlay.propTypes = {
    /**
     * Show/hide overlay
     */
    visible: PropTypes.bool,
    /**
     * Will enable/disable body-scrolling with the overlay visibility
     */
    scrollControl: PropTypes.bool
};
