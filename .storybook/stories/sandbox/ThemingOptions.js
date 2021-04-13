import React, { useContext, useRef, useState, useEffect } from "react";
import { AppContext } from "../../../src/components/layout/AppContext";
import { Button } from "../../../src/components/button/Button";
import { Row } from "../../../src/components/grid/Row";
import { Col } from "../../../src/components/grid/Col";
import { Input } from "../../../src/components/form/Input/Input";
import { Form } from "../../../src/components/form/Form/Form";
import { FormItem } from "../../../src/components/form/FormItem/FormItem";
import { H3 } from "../../../src/components/typography/headings/H3";
import { Icon } from "../../../src/components/graphic/Icon";

import { standard as standardTheme } from "../../../src/styles/themes";
import { setData, getData } from "../../utils/storageUtils";
import { CUSTOM_THEME_STORAGE_KEY } from "../examples/constants";


export const ThemingOptions = () => {
    const updateTimeout = useRef(null);
    const tempKey = useRef(null);
    const { loadTheme } = useContext(AppContext);
    const [customTheme, setCustomTheme] = useState(getData(CUSTOM_THEME_STORAGE_KEY) || {});

    const handleOptionChange = (key, value) => {
        let updatedTheme = { ...customTheme };
        if (value === null || value.trim() === "") {
            if (updatedTheme.options && updatedTheme.options.hasOwnProperty(key)) {
                delete updatedTheme.options[key];
            }
        } else {
            updatedTheme = {
                ...updatedTheme,
                options: {
                    ...updatedTheme.options,
                    [key]: value
                }
            };
        }

        setCustomTheme(updatedTheme);
    };

    useEffect(() => {
        clearTimeout(updateTimeout.current);
        updateTimeout.current = setTimeout(() => {
            setData(CUSTOM_THEME_STORAGE_KEY, customTheme);
            let mergedTheme = {
                ...standardTheme,
                options: { ...standardTheme.options, ...customTheme.options }
            };
            loadTheme(mergedTheme);
        }, 1000);
    }, [customTheme]);

    return (
        <Form>
            {Object.keys(standardTheme.options).map((key) => {
                const previousKey = tempKey.current;
                const currentKey = key.substring(0, key.indexOf("_"));
                tempKey.current = currentKey;
                const isColor = key.toLowerCase().indexOf("color");
                const isOverride = customTheme.options && customTheme.options.hasOwnProperty(key);
                return (
                    <React.Fragment key={key}>
                        {previousKey !== currentKey && previousKey !== null ? (
                            <React.Fragment>
                                <br />
                                <br />
                            </React.Fragment>
                        ) : null}
                        {previousKey !== currentKey ? (
                            <h3>
                                {currentKey
                                    .replace(/([A-Z])/g, " $1")
                                    .replace(/^./, function (str) {
                                        return str.toUpperCase();
                                    })}
                            </h3>
                        ) : null}
                        <FormItem label={key}>
                            <Input
                                type={isColor ? "text" : "text"}
                                placeholder={standardTheme.options[key]}
                                value={
                                    (customTheme.options && customTheme.options[key]) ||
                                    standardTheme.options[key]
                                }
                                onChange={(val) => handleOptionChange(key, val)}
                                append={isOverride ? <Icon name="edit" color="primary" /> : null}
                            />
                        </FormItem>
                    </React.Fragment>
                );
            })}
        </Form>
    );
};
