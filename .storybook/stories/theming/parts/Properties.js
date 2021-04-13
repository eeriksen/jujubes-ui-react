import React, { useContext, useRef, useState, useEffect } from "react";
import { AppContext } from "../../../../src/components/layout/AppContext";
import { Input } from "../../../../src/components/form/Input/Input";
import { Form } from "../../../../src/components/form/Form/Form";
import { FormItem } from "../../../../src/components/form/FormItem/FormItem";
import { Icon } from "../../../../src/components/graphic/Icon";

import { standard as standardTheme } from "../../../../src/styles/themes";
import { setData, getData } from "../../../utils/storageUtils";
import { CUSTOM_THEMES_STORAGE_KEY } from "../constants";
import { splitCamelCase } from "../../../../src/utils/stringUtils";


export const Properties = () => {
    const updateTimeout = useRef(null);
    const tempKey = useRef(null);
    const { loadTheme } = useContext(AppContext);
    const [customTheme, setCustomTheme] = useState(getData(CUSTOM_THEMES_STORAGE_KEY) || {});

    const handleOptionChange = (key, value) => {
        let updatedTheme = { ...customTheme };
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

        setCustomTheme(updatedTheme);
    };

    // useEffect(() => {
    //     clearTimeout(updateTimeout.current);
    //     updateTimeout.current = setTimeout(() => {
    //         setData(CUSTOM_THEMES_STORAGE_KEY, customTheme);
    //         let mergedTheme = {
    //             ...standardTheme,
    //             properties: { ...standardTheme.properties, ...customTheme.properties }
    //         };
    //         loadTheme(mergedTheme);
    //     }, 1000);
    // }, [customTheme]);

    return (
        <Form>
            {Object.keys(standardTheme.properties).map((key) => {
                const previousKey = tempKey.current;
                const currentKey = key.substring(0, key.indexOf("_"));
                tempKey.current = currentKey;
                const isColor = key.toLowerCase().indexOf("color");
                const isOverride = customTheme.properties && customTheme.properties.hasOwnProperty(key);
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
                                {splitCamelCase(currentKey)}
                            </h3>
                        ) : null}
                        <FormItem label={splitCamelCase(key.substring(key.indexOf("_") + 1))}>
                            <Input
                                type={isColor ? "text" : "text"}
                                placeholder={standardTheme.properties[key]}
                                value={
                                    (customTheme.properties && customTheme.properties[key]) ||
                                    standardTheme.properties[key]
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
