import React, {useEffect, useRef, useState} from "react"
import style from "./styles.scss"
import classNames from "classnames";


export const PopOver = (props) => {
    const {visible, onClose, children, content, arrowColor, size} = props;
    const baseRef = useRef(null);
    const popRef = useRef(null);
    const [topPos, setTopPos] = useState(0);
    const [leftPos, setLeftPos] = useState(0);
    const [arrowLeftPos, setarrowLeftPos] = useState(0);
    const [position, setPosition] = useState("bottom");

    useEffect(() => {
        _redrawPosition();
    }, [visible]);

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    /**
     * Redraw position
     * @private
     */
    const _redrawPosition = () => {
        const $base = baseRef.current;
        const $pop = popRef.current;
        const baseVal = $base.getBoundingClientRect();
        const popVal = $pop.getBoundingClientRect();
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        const distanceFromBottom = windowHeight - (baseVal.y + baseVal.height);
        const shouldPositionTop = distanceFromBottom <= popVal.height;
        const shouldPositionLeft = windowWidth - baseVal.x < 300;

        if(shouldPositionTop){
            setTopPos(baseVal.y - popVal.height);
            setPosition("top");
        }else {
            setTopPos(baseVal.y + baseVal.height);
            setPosition("bottom");
        }

        if(shouldPositionLeft){
            setLeftPos(baseVal.x + baseVal.width - popVal.width);
            setarrowLeftPos(popVal.width - (baseVal.width / 2));
        }else {
            setLeftPos(baseVal.x);
            setarrowLeftPos(baseVal.width / 2);
        }
    };


    /**
     * Handle click outside
     */
    const handleClickOutside = (e) => {
        if(!popRef.current.contains(e.target) && !baseRef.current.contains(e.target)){
            onClose && onClose(e);
        }
    };



    const baseClasses = classNames(style.base, {
        [style.visible]: visible,
        [style.sizeLarge]: size === "large",
        [style.onTop]: position === "top"
    });

    return (
        <div className={baseClasses}>
            <div ref={baseRef}>
                {children}
            </div>

            <div ref={popRef} className={style.pop} style={{
                top: `${topPos}px`,
                left: `${leftPos}px`
            }}>

                {/* Arrow */}
                <div className={classNames(style.arrow, {
                    [style.colorPrimary]: arrowColor === "primary",
                    [style.colorSecondary]: arrowColor === "secondary"
                })} style={{
                    left: arrowLeftPos && `${arrowLeftPos}px`
                }} />

                {/* Content */}
                <div className={style.wrapper}>
                    {content}
                </div>

            </div>
        </div>
    )
};
