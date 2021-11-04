import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import styles from "./PopOver.scss";
import classNames from "classnames";

export const PopOver = ({ visible, redraw, onClose, children, content, arrowColor, size, padding, offset }) => {
    const baseRef = useRef(null);
    const popRef = useRef(null);
    const [topPos, setTopPos] = useState(0);
    const [leftPos, setLeftPos] = useState(0);
    const [arrowLeftPos, setArrowLeftPos] = useState(0);
    const [position, setPosition] = useState("bottom");

    useEffect(() => {
        if (visible) {
            redrawPosition();
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [visible]);

    /**
     * Redraw position
     * @private
     */
    const redrawPosition = () => {
        const $base = baseRef.current.childNodes[0];
        const $pop = popRef.current;
        const baseVal = $base.getBoundingClientRect();
        const popVal = $pop.getBoundingClientRect();
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        const distanceFromBottom = windowHeight - (baseVal.y + baseVal.height);
        const baseBiggerThanPop = baseVal.width > popVal.width;
        const shouldPositionTop = distanceFromBottom <= popVal.height;

        if (shouldPositionTop) {
            setTopPos(-1 * popVal.height - (offset));
            setPosition("top");
        } else {
            setTopPos(baseVal.height + (offset));
            setPosition("bottom");
        }

        const leftSpace = baseVal.x;
        const rightSpace = windowWidth - (baseVal.x + baseVal.width);
        const hasLeftSpace = leftSpace >= popVal.width / 2;
        const hasRightSpace = rightSpace >= popVal.width / 2;

        // If no space on either left or right, we leave in middle
        if (!hasLeftSpace && !hasRightSpace) {
            if (baseBiggerThanPop) {
                setLeftPos((baseVal.width - popVal.width) / 2);
            } else {
                setLeftPos((popVal.width - baseVal.width) / -2);
            }
            setArrowLeftPos(popVal.width / 2);
        } else if (hasLeftSpace && !hasRightSpace) {
            setLeftPos(-(popVal.width - baseVal.width));
            setArrowLeftPos(popVal.width - baseVal.width + baseVal.width / 2);
        } else if (hasLeftSpace && hasRightSpace) {
            setLeftPos((popVal.width - baseVal.width) / -2);
            setArrowLeftPos(popVal.width / 2);
        } else {
            setLeftPos(0);
            setArrowLeftPos(baseVal.width / 2);
        }
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
        [styles.onTop]: position === "top",
        [styles.padding]: padding
    });

    return (
        <div className={baseClasses}>
            <div className={styles.trigger} ref={baseRef}>{children}</div>

            <div
                ref={popRef}
                className={styles.pop}
                style={{
                    top: `${topPos}px`,
                    left: `${leftPos}px`
                }}
            >
                {/* Arrow */}
                <div
                    className={classNames(styles.arrow, {
                        [styles.colorPrimary]: arrowColor === "primary"
                    })}
                    style={{
                        left: arrowLeftPos && `${arrowLeftPos}px`
                    }}
                />

                {/* Content */}
                <div className={styles.wrapper}>{content}</div>
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
    content: PropTypes.element,
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
    padding: PropTypes.bool
};

PopOver.defaultProps = {
    visible: false,
    padding: false,
    offset: 0,
    hideDelay: 0
};
