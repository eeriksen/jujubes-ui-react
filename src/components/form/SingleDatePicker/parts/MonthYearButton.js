import React, { useState, useEffect } from "react";
import moment from "moment";

import { Button } from "../../../button/Button";
import { Form } from "../../Form";
import { FormItem } from "../../FormItem";
import { Select, Option } from "../../Select";
import { PopOver } from "../../../navigation/PopOver";
import { Row, Col } from "../../../grid";

export const MonthYearButton = ({
    containerRef,
    visibleDate,
    onMonthSelect,
    onYearSelect,
    editValue
}) => {
    const [visible, setVisible] = useState(false);
    const [dateValue, setDateValue] = useState(null);
    const [yearList, setYearList] = useState([]);

    useEffect(() => {
        let date = moment(editValue);
        let yearArray = [];
        for (let i = -40; i < 20; i++) {
            yearArray.push(date.year() + i);
        }
        setDateValue(date);
        setYearList(yearArray);
    }, [editValue]);

    return dateValue ? (
        <PopOver
            visible={visible}
            container={containerRef.current}
            onClose={() => setVisible(false)}
            padding={true}
            content={
                <Form>
                    <Row>
                        <Col span={24}>
                            <FormItem label="Month">
                                <Select
                                    value={visibleDate.month()}
                                    onChange={(val) => onMonthSelect(visibleDate, val)}
                                >
                                    {moment.months().map((month, index) => (
                                        <Option key={index} value={index}>
                                            {month}
                                        </Option>
                                    ))}
                                </Select>
                            </FormItem>
                        </Col>
                        <Col span={24}>
                            <FormItem label="Year">
                                <Select
                                    value={visibleDate.year()}
                                    onChange={(val) => onYearSelect(visibleDate, val)}
                                >
                                    {yearList.map((year) => (
                                        <Option key={year} value={year}>
                                            {year}
                                        </Option>
                                    ))}
                                </Select>
                            </FormItem>
                        </Col>
                    </Row>
                </Form>
            }
        >
            <Button fill color="silent" labelSize="big" onClick={() => setVisible(!visible)}>
                {visibleDate.format("MMMM")} {visibleDate.year()}
            </Button>
        </PopOver>
    ) : null;
};
