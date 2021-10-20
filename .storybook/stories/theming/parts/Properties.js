import React, { useRef, useState } from "react";
import { Input } from "../../../../src/components/form/Input/Input";
import { Form } from "../../../../src/components/form/Form/Form";
import { FormItem } from "../../../../src/components/form/FormItem/FormItem";
import { Card, CardTitle, CardContent } from "../../../../src/components/card";

import { splitCamelCase } from "../../../../src/utils/stringUtils";
import themes from "../../../../src/styles/themes";
import { Section, SectionTitle } from "../../../../src/components/layout/Section";
import { Text } from "../../../../src/components/typography/Text/Text";

export const Properties = ({ theme, setTheme }) => {
    const updateTimeout = useRef(null);
    const tempKey = useRef(null);

    const handleOptionChange = (categoryKey, propKey, value) => {
        let updatedTheme = { ...theme };
        updatedTheme.properties[categoryKey][propKey] = value;
        setTheme(updatedTheme);
    };

    return theme ? (
        <CardContent>
            <Form>
                {Object.keys(theme.properties).map((categoryKey) => (
                    <Section>
                        <SectionTitle title={splitCamelCase(categoryKey)} />
                        <Form>
                            {Object.keys(theme.properties[categoryKey]).map((propKey) => {
                                return (
                                    <FormItem
                                        label={splitCamelCase(propKey)}
                                    >
                                        <Input
                                            placeholder={theme.properties[categoryKey][propKey]}
                                            value={theme.properties[categoryKey][propKey]}
                                            onChange={(val) => handleOptionChange(categoryKey, propKey, val)}
                                        />
                                    </FormItem>
                                );
                            })}
                        </Form>
                    </Section>
                ))}
            </Form>
        </CardContent>
    ) : null;
};
