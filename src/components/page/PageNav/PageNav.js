import React, { useRef, useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./PageNav.scss";
import { NavButton } from "./NavButton";
import { AppContext } from "../../layout/AppContext";
import { useDebounce } from "../../../utils/hooks";

export const PageNav = ({ children }) => {
    const baseRef = useRef();
    const buttonsRef = useRef();
    const buttonsWidth = useRef();
    const [compact, setCompact] = useState(false);
    const { pageInfo, updatePageInfo } = useContext(AppContext);

    useEffect(() => {
        const buttonsVal = buttonsRef.current.getBoundingClientRect();
        buttonsWidth.current = buttonsVal.width;
        adjustToWidth();

        updatePageInfo({
            hasNav: true
        });

        return () => {
            updatePageInfo({
                hasNav: false
            });
        };
    }, []);

    useDebounce(() => {
        adjustToWidth();
    }, [pageInfo.windowWidth], 200);

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
        </div>
    );
};

PageNav.propTypes = {
    children: PropTypes.arrayOf(NavButton)
};
