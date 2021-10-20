import React from "react";
import PropTypes from "prop-types";
import styles from "./Crumb.scss";
import { Clickable } from "../../button/Clickable";
import { Icon } from "../../graphic/Icon";

export const Crumb = ({ link, label }) => {
    return (
        <div className={styles.crumb}>
            <Clickable block className={styles.label} link={link}>
                {label}
            </Clickable>
            <div className={styles.arrow}>
                <Icon name="chevron-right" />
            </div>
        </div>
    );
};

Crumb.defaultValues = {
    current: false
};

Crumb.propTypes = {
    /**
     * Navigate to link when clicked
     */
    link: PropTypes.string,
    /**
     * Label of this crumb
     */
    label: PropTypes.string,
    /**
     * Flag to indicate if this is the current crumb
     */
    current: PropTypes.bool
};
