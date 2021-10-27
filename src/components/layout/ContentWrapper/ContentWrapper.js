import React, { useContext } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./ContentWrapper.scss";
import { AppContext } from "../AppContext";

export const ContentWrapper = ({ children, mobile, tablet, desktop, widescreen, confine, className }) => {
    const { pageInfo } = useContext(AppContext);

    let visible = false;
    switch (pageInfo.breakpoint) {
        case "mobile":
            visible =
                mobile === "down" ||
                mobile === "only" ||
                tablet === "down" ||
                desktop === "down" ||
                widescreen === "down" ||
                (!mobile && !tablet && !desktop && !widescreen);
            break;
        case "tablet":
            visible =
                mobile === "up" ||
                tablet === "down" ||
                tablet === "only" ||
                desktop === "down" ||
                widescreen === "down" ||
                (!mobile && !tablet && !desktop && !widescreen);
            break;
        case "desktop":
            visible =
                mobile === "up" ||
                tablet === "up" ||
                desktop === "down" ||
                desktop === "only" ||
                widescreen === "down" ||
                (!mobile && !tablet && !desktop && !widescreen);
            break;
        case "widescreen":
            visible =
                mobile === "up" ||
                tablet === "up" ||
                desktop === "up" ||
                widescreen === "down" ||
                widescreen === "only" ||
                (!mobile && !tablet && !desktop && !widescreen);
            break;
        default:
            visible = true;
            break;
    }

    return visible ? (
        <div
            className={classNames(styles.base, {
                [styles.confinePage]: confine === "page"
            }, className)}
        >
            {children}
        </div>
    ) : null;
};

ContentWrapper.propTypes = {
    mobile: PropTypes.oneOf(["down", "up", "only"]),
    tablet: PropTypes.oneOf(["down", "up", "only"]),
    desktop: PropTypes.oneOf(["down", "up", "only"]),
    widescreen: PropTypes.oneOf(["down", "only"])
};
