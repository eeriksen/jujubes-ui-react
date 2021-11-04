import React, { useState, useRef, useEffect } from "react";
import classNames from "classnames";
import style from "./Slider.scss";

import ReactSlider from "react-slider";
import { Icon } from "../../graphic/Icon";
import { PopOver } from "../../navigation/PopOver";
import { Text } from "../../typography/Text";

// TODO: Docs and vertical slider
export const Slider = (props) => {
    const { value, onChange, onAfterChange, onBeforeChange } = props;
    const [dragging, setDragging] = useState(false);
    const [showIndicator, setShowIndicator] = useState(false);
    const ref = useRef(null);
    const sliderRef = useRef(null);

    // Fix for not drawing correctly
    useEffect(() => {
        if (sliderRef.current.slider === null) return;
        function _handleResize() {
            if (sliderRef.current.slider.offsetParent !== null) {
                sliderRef.current.resize();
            }
        }
        const ro = new ResizeObserver(_handleResize);
        ro.observe(sliderRef.current.slider);
        return () => {
            ro.disconnect();
        };
    }, [ref.current]);

    const handleOnAfterChange = (val) => {
        setDragging(false);
        onAfterChange && onAfterChange(val);
    };

    const handleOnBeforeChange = (val) => {
        setDragging(true);
        onBeforeChange && onBeforeChange(val);
    };

    return (
        <ReactSlider
            {...props}
            ref={sliderRef}
            value={value}
            className={classNames(style.horizontalSlider, {
                [style.dragging]: dragging
            })}
            thumbClassName={style.thumb}
            thumbActiveClassName={style.active}
            trackClassName="Slider_track"
            markClassName={style.mark}
            onChange={onChange}
            onBeforeChange={handleOnBeforeChange}
            onAfterChange={handleOnAfterChange}
            renderThumb={(props, state) => (
                <button {...props} onMouseOver={() => setShowIndicator(true)} onMouseOut={() => setShowIndicator(false)}>
                    <PopOver
                        visible={showIndicator}
                        redraw={showIndicator ? Math.random() : false}
                        content={
                            <Text size="h4" weight="medium">
                                {value}
                            </Text>
                        }
                        size="auto"
                        padding
                    >
                        <div className={style.wrapper}>
                            <Icon name="dot-matrix" />
                        </div>
                    </PopOver>
                </button>
            )}
        ></ReactSlider>
    );
};
