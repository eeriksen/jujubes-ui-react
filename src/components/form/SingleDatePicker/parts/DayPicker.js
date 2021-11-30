import React, { useRef } from "react";
import moment from "moment";
import styles from "../SingleDatePicker.scss";

import "react-dates/initialize";
import { DayPickerSingleDateController } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

import { isSameDay } from "../../../../utils/dateUtils";
import { Button } from "../../../button/Button";
import { MonthYearButton } from "./MonthYearButton";

export const DayPicker = ({ editValue, setEditValue, isDayBlocked, firstDayOfWeek }) => {
    const containerRef = useRef();
    return (
        <div ref={containerRef} className={styles.dayPicker}>
            <DayPickerSingleDateController
                noBorder={true}
                date={editValue ? moment(editValue) : null}
                focused={true}
                isDayHighlighted={(day) => isSameDay(day, moment())}
                isDayBlocked={isDayBlocked}
                numberOfMonths={1}
                firstDayOfWeek={firstDayOfWeek}
                onDateChange={(val) => setEditValue(val.format())}
                renderMonthElement={({ month, onMonthSelect, onYearSelect }) => {
                    return (
                        <MonthYearButton
                            containerRef={containerRef}
                            visibleDate={month}
                            onMonthSelect={onMonthSelect}
                            onYearSelect={onYearSelect}
                            editValue={editValue}
                        />
                    );
                }}
                navPrev={
                    <Button
                        className={styles.prevButton}
                        square
                        iconColor="primary"
                        propagate
                        icon="arrow-left"
                    />
                }
                navNext={
                    <Button
                        className={styles.nextButton}
                        square
                        iconColor="primary"
                        propagate
                        icon="arrow-right"
                    />
                }
                hideKeyboardShortcutsPanel={true}
            />
        </div>
    );
};
