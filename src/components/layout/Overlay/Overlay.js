import React, { useEffect } from "react";
import classNames from "classnames";
import styles from "./Overlay.scss";

import scrollUtils from "../../../utils/scrollUtils";
import { Clickable } from "../../button/Clickable";

export const Overlay = ({ visible, className, onClick, scrollControl }) => {
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

    // Classes
    const baseClasses = classNames(
        styles.base,
        {
            [styles.visible]: visible
        },
        className
    );

    return <Clickable block className={baseClasses} onClick={onClick} />;
};

Overlay.defaultValues = {
    scrollControl: true
};
