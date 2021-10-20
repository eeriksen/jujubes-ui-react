import React, { useState, useEffect } from "react";
import {
    Popup,
    PopupTitle,
    PopupContent,
    PopupFooter
} from "../../../../src/components/notify/Popup";
import { Input } from "../../../../src/components/form/Input";
import { Form } from "../../../../src/components/form/Form";
import { FormItem } from "../../../../src/components/form/FormItem";
import { Button } from "../../../../src/components/button/Button";
import { getData, setData } from "../../../utils/storageUtils";
import { randomString } from "../../../utils/stringUtils";
import { CUSTOM_THEMES_STORAGE_KEY, ACTIVE_THEME_STORAGE_KEY } from "../../../constants";
import { Select, Option } from "../../../../src/components/form/Select";
import { standard as standardTheme } from "../../../../src/styles/themes";

export const NewTheme = ({ onClose, themeList, fetchThemeList, setActiveThemeId }) => {
    const [customThemes, setCustomThemes] = useState(getData(CUSTOM_THEMES_STORAGE_KEY) || []);
    const [name, setName] = useState(null);
    const [fromThemeId, setFromThemeId] = useState("standard");

    const handleCreateTheme = () => {
        let fromTheme = themeList.find((t) => t.id === fromThemeId);
        let newTheme = {
            ...fromTheme,
            id: randomString(6),
            name: name,
        };

        customThemes.push(newTheme);
        setData(CUSTOM_THEMES_STORAGE_KEY, customThemes);
        setData(ACTIVE_THEME_STORAGE_KEY, newTheme.id);
        fetchThemeList();
        setActiveThemeId(newTheme.id);
        onClose();
    };

    return (
        <Popup onClose={onClose}>
            <PopupTitle>New theme</PopupTitle>
            <PopupContent>
                <Form>
                    <FormItem label="From theme">
                        <Select value={fromThemeId} onChange={setFromThemeId}>
                            {themeList?.map((theme) => (
                                <Option key={theme.id} value={theme.id}>
                                    {theme.name}
                                </Option>
                            ))}
                        </Select>
                    </FormItem>
                    <FormItem label="Theme name">
                        <Input
                            value={name}
                            onChange={setName}
                            placeholder="Give your theme a name..."
                        />
                    </FormItem>
                </Form>
            </PopupContent>
            <PopupFooter>
                <Button color="primary" disabled={!name || !name.trim().length} onClick={handleCreateTheme}>Create theme</Button>
            </PopupFooter>
        </Popup>
    );
};
