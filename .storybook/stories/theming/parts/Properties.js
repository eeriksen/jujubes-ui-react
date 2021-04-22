import React, { useContext, useRef, useState, useEffect } from "react";
import { Input } from "../../../../src/components/form/Input/Input";
import { Form } from "../../../../src/components/form/Form/Form";
import { FormItem } from "../../../../src/components/form/FormItem/FormItem";
import { CardContent } from "../../../../src/components/card";

import { standard as standardTheme } from "../../../../src/styles/themes";
import { splitCamelCase } from "../../../../src/utils/stringUtils";

export const Properties = ({ theme, setTheme }) => {
    const updateTimeout = useRef(null);
    const tempKey = useRef(null);

    const handleOptionChange = (key, value) => {
        let updatedTheme = { ...theme };
        if (value === null || value.trim() === "") {
            if (updatedTheme.properties && updatedTheme.properties.hasOwnProperty(key)) {
                delete updatedTheme.properties[key];
            }
        } else {
            updatedTheme = {
                ...updatedTheme,
                properties: {
                    ...updatedTheme.properties,
                    [key]: value
                }
            };
        }

        setTheme(updatedTheme);
    };

    return theme ? (
        <CardContent>
            <Form>
                {Object.keys(standardTheme.properties).map((key) => {
                    const previousKey = tempKey.current;
                    const currentKey = key.substring(0, key.indexOf("_"));
                    tempKey.current = currentKey;
                    const isColor = key.toLowerCase().indexOf("color");
                    const isOverride = theme.properties && theme.properties.hasOwnProperty(key);
                    return (
                        <React.Fragment key={key}>
                            {previousKey !== currentKey && previousKey !== null ? (
                                <React.Fragment>
                                    <br />
                                    <br />
                                </React.Fragment>
                            ) : null}
                            {previousKey !== currentKey ? (
                                <h3>{splitCamelCase(currentKey)}</h3>
                            ) : null}
                            <FormItem label={splitCamelCase(key.substring(key.indexOf("_") + 1))}>
                                <Input
                                    type={isColor ? "text" : "text"}
                                    placeholder={standardTheme.properties[key]}
                                    value={theme.properties && theme.properties[key]}
                                    error={!theme.properties.hasOwnProperty(key)}
                                    onChange={(val) => handleOptionChange(key, val)}
                                />
                            </FormItem>
                        </React.Fragment>
                    );
                })}
            </Form>
        </CardContent>
    ) : null;
};
