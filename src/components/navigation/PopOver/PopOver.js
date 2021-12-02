import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import styles from "./PopOver.scss";
import classNames from "classnames";
import { calculatePosition } from "../../../utils/popOverUtils";
import { findParentWithCSS } from "../../../utils/domUtils";
import { Arrow } from "../../graphic";

export const PopOver = ({
    visible,
    redraw,
    onClose,
    children,
    content,
    arrowColor,
    size,
    padding,
    offset,
    position,
    container
}) => {
    const baseRef = useRef(null);
    const popRef = useRef(null);
    const [popStyle, setPopStyle] = useState({
        top: 0,
        left: 0
    });
    const [arrowStyle, setArrowStyle] = useState({});

    useEffect(() => {
        if (visible) {
            redrawPosition();
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [visible]);

    useEffect(() => {
        const { element = document } =
            findParentWithCSS(baseRef.current, "overflow-y", "auto") || {};
        element.addEventListener("scroll", redrawPosition);
        return () => {
            element.removeEventListener("scroll", redrawPosition);
        };
    }, []);

    /**
     * Redraw position
     * @private
     */
    const redrawPosition = () => {
        const $base = baseRef.current.childNodes[0];
        const $pop = popRef.current;
        const result = calculatePosition({ $base, $pop, offset, position, container });
        setPopStyle(result.popStyle);
        setArrowStyle(result.arrowStyle);
    };
    useEffect(redrawPosition, [redraw]);

    /**
     * Handle click outside
     */
    const handleClickOutside = (e) => {
        if (!popRef.current.contains(e.target) && !baseRef.current.contains(e.target)) {
            onClose && onClose(e);
        }
    };

    const baseClasses = classNames(styles.base, {
        [styles.visible]: visible,
        [styles.sizeLarge]: size === "large",
        [styles.sizeAuto]: size === "auto",
        [styles.paddingSmall]: padding === "small",
        [styles.paddingRegular]: padding === true || padding === "regular",
        [styles.paddingMedium]: padding === "medium",
        [styles.paddingLarge]: padding === "large"
    });

    return (
        <div className={baseClasses}>
            <div className={styles.trigger} ref={baseRef}>
                {children}
            </div>

            <div ref={popRef} className={styles.pop} style={popStyle}>
                <div className={styles.wrapper}>
                    <Arrow
                        className={classNames(styles.arrow, {
                            [styles.colorPrimary]: arrowColor === "primary"
                        })}
                        style={arrowStyle}
                    />
                    <div className={styles.content}>{visible && content}</div>
                </div>
            </div>
        </div>
    );
};

PopOver.propTypes = {
    /**
     * Show pop over
     */
    visible: PropTypes.bool,
    /**
     * Close callback triggered when clicking outside the pop over
     */
    onClose: PropTypes.func,
    /**
     * The content inside the pop over
     */
    content: PropTypes.any,
    /**
     * The color of the pop over arrow
     */
    arrowColor: PropTypes.oneOf([null, "primary"]),
    /**
     * Width of the pop over
     */
    size: PropTypes.oneOf([null, "large", "auto"]),
    /**
     * The element that will show the pop over, usually a button
     */
    children: PropTypes.element,

    /**
     * Padding around content
     */
    padding: PropTypes.oneOf([true, "small", "regular", "medium", "large"]),
    /**
     * Preferred placement
     */
    position: PropTypes.oneOf(["bottom", "top"])
};

PopOver.defaultProps = {
    visible: false,
    padding: null,
    offset: 0,
    hideDelay: 0,
    position: "bottom"
};
