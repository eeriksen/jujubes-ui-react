import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./OnOffSwitch.scss";

import { Icon } from "../../graphic/Icon";

export const OnOffSwitch = ({ value, onChange, disabled, children }) => {
    const toggleSwitch = () => {
        // Check if disabled
        if (disabled) {
            return false;
        }

        // Callback
        onChange && onChange(!value);
    };

    const classes = classNames(styles.base, {
        [styles.isOff]: !value,
        [styles.disabled]: disabled,
        [styles.noLabel]: !children
    });

    return (
        <div className={classes} onClick={toggleSwitch}>
            <div className={styles.switch}>
                <div className={styles.handle} />
                <Icon className={styles.onIcon} name="check" small />
                <Icon className={styles.offIcon} name="close" small />
            </div>

            {/* Label */}
            {children ? <div className={styles.label}>{children}</div> : null}
        </div>
    );
};

OnOffSwitch.propTypes = {

    /**
     * The value of the switch.
     */
    value: PropTypes.bool,

    /**
     * Change callback function
     */
    onChange: PropTypes.func,

    /**
     * Disabled state
     */
    disabled: PropTypes.bool,

    /**
     * Text to display along with the switch
     */
    children: PropTypes.any
};
