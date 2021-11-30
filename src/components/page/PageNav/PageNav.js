import React, { useRef, useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./PageNav.scss";
import { NavButton } from "./NavButton";
import { AppContext } from "../../layout/AppContext";
import { ContentWrapper } from "../../layout/ContentWrapper";
import { useDebounce } from "../../../utils/hooks";

export const PageNav = ({ children, embedded }) => {
    const adjustTimeoutRef = useRef();
    const baseRef = useRef();
    const mounted = useRef(false);
    const buttonsRef = useRef();
    const buttonsWidth = useRef();
    const [compact, setCompact] = useState(false);
    const { pageInfo, updatePageInfo } = useContext(AppContext);

    useEffect(() => {
        mounted.current = true;
        adjustToWidth();
        updatePageInfo({
            hasPageNav: true
        });

        return () => {
            mounted.current = true;
            updatePageInfo({
                hasPageNav: false
            });
        };
    }, []);

    useDebounce(
        () => {
            adjustToWidth();
            updatePageInfo({
                hasPageNav: true
            });
        },
        [pageInfo.windowWidth],
        200
    );

    const adjustToWidth = () => {
        clearTimeout(adjustTimeoutRef.current);
        adjustTimeoutRef.current = setTimeout(() => {
            if (!mounted.current || !baseRef.current || !buttonsRef.current) {
                return;
            }
            const baseBounds = baseRef.current.getBoundingClientRect();
            const buttonBounds = buttonsRef.current.getBoundingClientRect();

            if(!buttonsWidth.current){
                buttonsWidth.current = buttonBounds.width;
            }

            setCompact(buttonsWidth.current > baseBounds.width);
        }, 200);
    };

    return (
        <div
            id="page_nav_notice"
            ref={baseRef}
            className={classNames(styles.base, {
                [styles.compact]: compact,
                [styles.embedded]: embedded
            })}
        >
            <ContentWrapper confine={embedded && "page"}>
                <div ref={buttonsRef} className={styles.buttons}>
                    {children}
                </div>
            </ContentWrapper>
        </div>
    );
};

PageNav.propTypes = {
    children: PropTypes.arrayOf(NavButton)
};
