import React from "react";
import PropTypes from "prop-types";
import styles from "./RadioGroup.scss";
import { Radio } from "./Radio";

export const RadioGroup = ({ onChange, value, children }) => {
    const handleRadioToggle = (value) => {
        onChange && onChange(value);
    };

    return (
        <div className={styles.group}>
            {React.Children.map(children, (child, index) => {
                return React.cloneElement(child, {
                    groupValue: value,
                    onToggle: handleRadioToggle
                });
            })}
        </div>
    );
};

RadioGroup.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    children: PropTypes.arrayOf(Radio)
};
