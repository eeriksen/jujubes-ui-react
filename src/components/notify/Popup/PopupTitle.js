import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";

export const PopupTitle = ({ description, children }) => {
    return (
        <div className={styles.title}>
            <div className={styles.text}>{children}</div>

            {description ? <div className={styles.description}>{description}</div> : null}
        </div>
    );
};

PopupTitle.propTypes = {
    /**
     * Smaller title text
     */
    description: PropTypes.string,
    /**
     * Popup title text
     */
    children: PropTypes.any
};
