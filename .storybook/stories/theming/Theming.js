import React, { useContext, useRef, useState, useEffect } from "react";
import { AppContext } from "../../../src/components/layout/AppContext";

import { Options } from "./parts/Options";
import { NewTheme } from "./parts/NewTheme";

import { standard as standardTheme } from "../../../src/styles/themes";
import { setData, getData } from "../../utils/storageUtils";
import { CUSTOM_THEMES_STORAGE_KEY } from "./constants";
import { Page, PageHeader } from "../../../src/components/page";
import { Card, CardTitle, CardContent } from "../../../src/components/card";
import { Row } from "../../../src/components/grid/Row";
import { Col } from "../../../src/components/grid/Col";
import { Select, Option } from "../../../src/components/form/Select";

export const Theming = () => {
    const updateTimeout = useRef(null);
    const tempKey = useRef(null);
    const { loadTheme } = useContext(AppContext);
    const [showNewThemePrompt, setShowNewThemePrompt] = useState(false);
    const [themeList, setThemeList] = useState(getData(CUSTOM_THEMES_STORAGE_KEY) || []);

    // useEffect(() => {
    //     clearTimeout(updateTimeout.current);
    //     updateTimeout.current = setTimeout(() => {
    //         setData(CUSTOM_THEMES_STORAGE_KEY, customTheme);
    //         let mergedTheme = {
    //             ...standardTheme,
    //             options: { ...standardTheme.options, ...customTheme.options }
    //         };
    //         loadTheme(mergedTheme);
    //     }, 1000);
    // }, [customTheme]);

    const fetchThemeList = () => {
        setThemeList(getData(CUSTOM_THEMES_STORAGE_KEY) || []);
    };

    return (
        <Page>
            <PageHeader title="Theming" />
            <Row>
                <Col span={24}>
                    <Card>
                        <CardTitle
                            title="Active theme"
                            actions={[
                                { icon: "plus-big", onClick: () => setShowNewThemePrompt(true) }
                            ]}
                        />
                        <CardContent>
                            <Select placeholder="Select or create a theme">
                                {themeList &&
                                    themeList.map((theme) => (
                                        <Option key={theme.id} value={theme.id}>
                                            {theme.name}
                                        </Option>
                                    ))}
                            </Select>
                        </CardContent>
                    </Card>
                </Col>
                <Col span={24}>
                    <Card>
                        <CardTitle title="Options" />
                        <CardContent>
                            <Options />
                        </CardContent>
                    </Card>
                </Col>
            </Row>

            {/* PROMPT: New theme */}
            {showNewThemePrompt ? (
                <NewTheme
                    onClose={() => setShowNewThemePrompt(false)}
                    fetchThemeList={fetchThemeList}
                />
            ) : null}
        </Page>
    );
};
