import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import moment from "moment";
import styles from "./TimePicker.scss";
import { Input } from "../Input";
import { Icon } from "../../graphic/Icon";
import { Popup } from "../../notify/Popup";
import { TimeSelector } from "./parts/TimeSelector";

export const TimePicker = ({ value, onChange, placeholder, error }) => {
    const [focused, setFocused] = useState(false);
    const [hours, setHours] = useState(null);
    const [minutes, setMinutes] = useState(null);
    const [selectorType, setSelectorType] = useState("HOURS");

    useEffect(() => {
        const date = value ? new Date(value) : new Date();
        setHours(date.getHours());
        setMinutes(date.getMinutes());
    }, [value]);

    const handleInputClick = () => {
        document.activeElement.blur();
        setSelectorType("HOURS");
        setFocused(true);
    };

    const handleChangeHours = (newHours) => {
        const date = value ? new Date(value) : new Date();
        date.setHours(newHours);
        onChange && onChange(date);
    };

    const handleChangeMinutes = (newMinutes) => {
        const date = value ? new Date(value) : new Date();
        date.setMinutes(newMinutes);
        onChange && onChange(date);
    };

    return (
        <div className={styles.base}>
            <Input
                placeholder={placeholder}
                error={error}
                prepend={<Icon name="clock" className={styles.icon} />}
                value={value && moment(value).format("HH:mm")}
                onClick={handleInputClick}
            />

            {focused ? (
                <Popup onClose={() => setFocused(false)}>
                    <div className={styles.preview}>
                        <button
                            className={classNames(styles.segment, {
                                [styles.selected]: selectorType === "HOURS"
                            })}
                            onClick={() => setSelectorType("HOURS")}
                        >
                            {hours.toString().length < 2 ? "0" + hours : hours}
                        </button>
                        <span className={styles.colon}>:</span>
                        <button
                            className={classNames(styles.segment, {
                                [styles.selected]: selectorType === "MINUTES"
                            })}
                            onClick={() => setSelectorType("MINUTES")}
                        >
                            {minutes.toString().length < 2 ? "0" + minutes : minutes}
                        </button>
                    </div>
                    <div className={styles.picker}>
                        <TimeSelector
                            visible={selectorType === "HOURS"}
                            type="HOURS"
                            value={hours}
                            onChange={handleChangeHours}
                            onNext={() => setSelectorType("MINUTES")}
                        />
                        <TimeSelector
                            visible={selectorType === "MINUTES"}
                            type="MINUTES"
                            value={minutes}
                            onChange={handleChangeMinutes}
                            onNext={() => setFocused(false)}
                        />
                    </div>
                </Popup>
            ) : null}
        </div>
    );
};

TimePicker.defaultProps = {
    value: null,
    placeholder: "Set time"
};

TimePicker.propTypes = {
    /**
     * Value of time picker
     */
    value: PropTypes.instanceOf(Date),
    /**
     * Change callback function
     */
    onChange: PropTypes.func,
    /**
     * Placeholder text
     */
    placeholder: PropTypes.string,
    /**
     * Error indicator
     */
    error: PropTypes.bool
};
