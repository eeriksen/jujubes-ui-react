import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames";
import styles from "./TimeSelector.scss";

export const TimeSelector = ({ type, value, onChange, onNext, visible }) => {
    const clockRef = useRef();
    const [isDragging, setIsDragging] = useState(false);
    const [handRotation, setHandRotation] = useState(0);
    const [handInner, setHandInner] = useState(false);
    const [outerTimes, setOuterTimes] = useState([]);
    const [innerTimes, setInnerTimes] = useState([]);

    useEffect(() => {
        if (type === "HOURS") {
            setOuterTimes([12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
            setInnerTimes([0, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]);
        } else if (type === "MINUTES") {
            setOuterTimes(Array.from(Array(60).keys()));
            setInnerTimes([]);
        }
    }, [type]);

    useEffect(() => {
        const outerIndex = outerTimes.indexOf(value);
        const innerIndex = innerTimes.indexOf(value);
        if (outerIndex >= 0) {
            const angle = 360 / outerTimes.length;
            setHandRotation(Math.round(outerIndex * angle));
            setHandInner(false);
        } else if (innerIndex >= 0) {
            const angle = 360 / innerTimes.length;
            setHandRotation(Math.round(innerIndex * angle));
            setHandInner(true);
        }
    }, [value, outerTimes, innerTimes]);

    const handleDragStart = (e) => {
        e.stopPropagation();
        setIsDragging(true);
    };

    const handleDrag = (e) => {
        e.stopPropagation();
        if (!isDragging) {
            return;
        }

        let pointerX = e.clientX;
        let pointerY = e.clientY;
        if (e.touches && e.touches.length) {
            pointerX = e.touches[0].clientX;
            pointerY = e.touches[0].clientY;
        }else if(e.changedTouches && e.changedTouches.length){
            pointerX = e.changedTouches[0].clientX;
            pointerY = e.changedTouches[0].clientY;
        }

        const clockDimensions = clockRef.current.getBoundingClientRect();
        const clockCenterX = clockDimensions.x + clockDimensions.width / 2;
        const clockCenterY = clockDimensions.y + clockDimensions.height / 2;
        const xPos = (pointerX - clockCenterX) / (clockDimensions.width / 2);
        const yPos = (clockCenterY - pointerY) / (clockDimensions.height / 2);

        // Inner time wheel
        let isInnerValue = false;
        if (innerTimes && innerTimes.length) {
            const innerOffset = 0.63;
            isInnerValue =
                yPos < innerOffset &&
                yPos > -innerOffset &&
                xPos < innerOffset &&
                xPos > -innerOffset;
        }
        setHandInner(isInnerValue);

        // Find hand rotation value
        const angle = 360 / (isInnerValue ? innerTimes.length : outerTimes.length);
        const degrees = Math.round(Math.atan2(xPos, yPos) * (180 / Math.PI));
        const roundDegree = Math.round(degrees / angle) * angle;
        setHandRotation(roundDegree);

        // Set value
        const valueIndex = (roundDegree >= 0 ? roundDegree : 360 + roundDegree) / angle;
        const newValue = isInnerValue ? innerTimes[valueIndex] : outerTimes[valueIndex];
        onChange && onChange(newValue);
    };

    const handleDragStop = (e) => {
        e.stopPropagation();
        e.preventDefault();
        handleDrag(e);
        setIsDragging(false);
        onNext();
    };

    const handleClickTime = (e, time) => {
        e.stopPropagation();
        onChange(time);
    };

    return (
        <div className={classNames(styles.timeSelector, {
            [styles.visible]: visible
        })}>
            <div
                ref={clockRef}
                className={styles.clock}
                onMouseMove={handleDrag}
                onTouchMove={handleDrag}
                onMouseDown={handleDragStart}
                onTouchStart={handleDragStart}
                onMouseUp={handleDragStop}
                onTouchEnd={handleDragStop}
            >
                {/* Hand */}
                <div
                    className={classNames(styles.hand, {
                        [styles.inner]: handInner
                    })}
                    style={{ transform: `rotate(${handRotation}deg)` }}
                >
                    <button>
                        <div style={{ transform: `rotate(-${handRotation}deg)` }}>
                            {value.toString().length < 2 ? "0" + value : value}
                        </div>
                    </button>
                </div>

                {/* Outer times */}
                <div
                    className={classNames(styles.timeValues, {
                        [styles.focused]: !handInner
                    })}
                >
                    {outerTimes.map((time, index) => {
                        const angle = 360 / outerTimes.length;
                        const rotation = Math.round(270 + index * angle);
                        return outerTimes.length <= 12 || index % 5 === 0 ? (
                            <button
                                key={time}
                                onMouseDown={(e) => handleClickTime(e, time)}
                                className={classNames(styles.time, {
                                    [styles.selected]: value === time
                                })}
                                style={{
                                    transform: `rotate(${rotation}deg) translate(120px) rotate(-${rotation}deg)`
                                }}
                            >
                                {time.toString().length < 2 ? "0" + time : time}
                            </button>
                        ) : null;
                    })}
                </div>

                {/* Inner times */}
                {innerTimes ? (
                    <div
                        className={classNames(styles.timeValues, {
                            [styles.focused]: handInner
                        })}
                    >
                        {innerTimes.map((time, index) => {
                            const angle = 360 / innerTimes.length;
                            const rotation = Math.round(270 + index * angle);
                            return innerTimes.length <= 12 || index % 5 === 0 ? (
                                <button
                                    key={time}
                                    onMouseDown={(e) => handleClickTime(e, time)}
                                    className={classNames(styles.time, {
                                        [styles.selected]: value === time
                                    })}
                                    style={{
                                        transform: `rotate(${rotation}deg) translate(80px) rotate(-${rotation}deg)`
                                    }}
                                >
                                    {time.toString().length < 2 ? "0" + time : time}
                                </button>
                            ) : null;
                        })}
                    </div>
                ) : null}
            </div>
        </div>
    );
};
