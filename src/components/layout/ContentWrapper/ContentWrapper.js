import React, { useContext } from "react";
import PropTypes from "prop-types";
import styles from "./ContentWrapper.scss";
import { AppContext } from "../AppContext";

export const ContentWrapper = ({ children, mobile, tablet, desktop, widescreen }) => {
    const { pageInfo } = useContext(AppContext);

    let visible = false;
    switch (pageInfo.breakpoint) {
        case "mobile":
            visible =
                mobile === "down" ||
                mobile === "only" ||
                tablet === "down" ||
                desktop === "down" ||
                widescreen === "down";
            break;
        case "tablet":
            visible =
                mobile === "up" ||
                tablet === "down" ||
                tablet === "only" ||
                desktop === "down" ||
                widescreen === "down";
            break;
        case "desktop":
            visible =
                mobile === "up" ||
                tablet === "up" ||
                desktop === "down" ||
                desktop === "only" ||
                widescreen === "down";
            break;
        case "widescreen":
            visible =
                mobile === "up" ||
                tablet === "up" ||
                desktop === "up" ||
                widescreen === "down" ||
                widescreen === "only";
            break;
        default:
            visible = true;
    }

    return visible ? <div className={styles.base}>{children}</div> : null;
};

ContentWrapper.propTypes = {
    mobile: PropTypes.oneOf(["down", "up", "only"]),
    tablet: PropTypes.oneOf(["down", "up", "only"]),
    desktop: PropTypes.oneOf(["down", "up", "only"]),
    widescreen: PropTypes.oneOf(["down", "only"])
};
