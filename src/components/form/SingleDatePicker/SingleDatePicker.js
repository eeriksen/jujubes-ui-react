import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./SingleDatePicker.scss";
import moment from "moment";

import { Input } from "../Input";
import { Popup, PopupTitle, PopupFooter } from "../../notify/Popup";
import { Button } from "../../button/Button";
import { Icon } from "../../graphic/Icon";
import { Row } from "../../grid/Row";
import { Col } from "../../grid/Col";
import { DayPicker } from "./parts/DayPicker";

export const SingleDatePicker = ({
    value,
    placeholder,
    error,
    onChange,
    firstDayOfWeek,
    isDayBlocked,
    lang
}) => {
    const [editValue, setEditValue] = useState(null);
    const [focused, setFocused] = useState(false);

    const handleConfirm = () => {
        onChange && onChange(editValue);
        setEditValue(null);
        setFocused(false);
    };

    const handleInputClick = () => {
        document.activeElement.blur();
        setEditValue(value || moment().format());
        setFocused(true);
    };

    const handleClearDate = () => {
        setEditValue(null);
        setFocused(false);
        onChange && onChange(null);
    };

    const handleSetToday = () => {
        setFocused(false);
        onChange && onChange(moment().format());
    };

    return (
        <div className={styles.base}>
            <Input
                placeholder={placeholder}
                error={error}
                prepend={<Icon name="calendar" className={styles.icon} />}
                value={value && moment(value).format("LL")}
                onClick={handleInputClick}
            />

            {focused ? (
                <Popup onClose={() => setFocused(false)}>
                    <PopupTitle size="medium" align="center">
                        {moment(editValue).format("LL")}
                    </PopupTitle>
                    <DayPicker
                        editValue={editValue}
                        setEditValue={setEditValue}
                        isDayBlocked={isDayBlocked}
                        firstDayOfWeek={firstDayOfWeek}
                    />
                    <PopupFooter>
                        <div className={styles.controls}>
                            <Row gutter={["small", "small"]}>
                                <Col span={12}>
                                    <Button
                                        fill
                                        size="small"
                                        icon="calendar"
                                        iconColor="primary"
                                        onClick={handleSetToday}
                                    >
                                        {lang.setToday}
                                    </Button>
                                </Col>
                                <Col span={12}>
                                    <Button
                                        fill
                                        size="small"
                                        icon="close"
                                        iconColor="primary"
                                        onClick={handleClearDate}
                                    >
                                        {lang.clearDate}
                                    </Button>
                                </Col>
                                <Col span={24}>
                                    <Button fill color="primary" onClick={handleConfirm}>
                                        {lang.selectDate}
                                    </Button>
                                </Col>
                            </Row>
                        </div>
                    </PopupFooter>
                </Popup>
            ) : null}
        </div>
    );
};

SingleDatePicker.defaultProps = {
    value: null,
    placeholder: "Choose a date",
    firstDayOfWeek: 1,
    lang: {
        setToday: "Set today",
        clearDate: "Clear date",
        selectDate: "Select date"
    }
};

SingleDatePicker.propTypes = {
    /**
     * Value of date picker. Default format is: "YYYY-MM-DDTHH:mm:ssZ"
     */
    value: PropTypes.string,
    /**
     * Placeholder text to display in input
     */
    placeholder: PropTypes.string,
    /**
     * Define first day of week
     */
    firstDayOfWeek: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
    /**
     * Function to decide if date is blocked
     */
    isDayBlocked: PropTypes.func,
    /**
     * Language text values
     */
    lang: PropTypes.object
};
