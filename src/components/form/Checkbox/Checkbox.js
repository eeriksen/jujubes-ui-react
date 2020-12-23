import React, {useState} from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import styles from "./styles.scss"

import { Icon } from "../../graphic/Icon"


export const Checkbox = ({checked, onChange, className, children, embedded}) => {
    const [uniqueId] = useState(`cb-${Math.round(Math.random() * 100000)}`);

    const toggleChecked = (e) => {
        e.stopPropagation();
        onChange && onChange(!checked);
    };

    // Base class
    const baseClasses = classNames(styles.base, {
        [styles.isChecked]: checked,
        [styles.embedded]: embedded
    }, className);

    return (
        <div className={baseClasses}>
            <input id={uniqueId} type="checkbox" checked={checked} onChange={toggleChecked}/>
            <label htmlFor={uniqueId}>
                <div className={styles.check}>
                    <Icon name="check" className={styles.icon} />
                </div>

                {/* Label */}
                {children ? (
                    <div className={styles.label}>
                        {children}
                    </div>
                ) : null}
            </label>
        </div>
    )
}

Checkbox.propTypes = {

    /**
     * Value to indicate weather it's checked or not
     */
    checked: PropTypes.bool,

    /**
     * Toggle checked value callback
     */
    onChange: PropTypes.func
}
