import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./PageNav.scss";
import { WindowResizeListener } from "../../layout/WindowResizeListener/WindowResizeListener";
import { NavButton } from "./NavButton";

export const PageNav = ({ children }) => {
    const baseRef = useRef();
    const buttonsRef = useRef();
    const buttonsWidth = useRef();
    const [compact, setCompact] = useState(false);

    useEffect(() => {
        const buttonsVal = buttonsRef.current.getBoundingClientRect();
        buttonsWidth.current = buttonsVal.width;
        adjustToWidth();
    }, []);

    const adjustToWidth = () => {
        if (!baseRef.current) {
            return;
        }

        const baseVal = baseRef.current.getBoundingClientRect();
        setCompact(baseVal.width < buttonsWidth.current);
    };

    return (
        <div
            id="page_nav_notice"
            ref={baseRef}
            className={classNames(styles.base, {
                [styles.compact]: compact
            })}
        >
            <div ref={buttonsRef} className={styles.buttons}>
                {children}
            </div>
            <WindowResizeListener onResize={adjustToWidth} />
        </div>
    );
};

PageNav.propTypes = {
    children: PropTypes.arrayOf(NavButton)
};
