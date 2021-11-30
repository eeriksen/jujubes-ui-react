import React, { useContext, useRef, useState, useEffect } from "react";
import { AppContext } from "../../../src/components/layout/AppContext";

import { Properties } from "./parts/Properties";
import { Editor } from "./parts/Editor";
import { NewTheme } from "./parts/NewTheme";

import { setData, getData } from "../../utils/storageUtils";
import { CUSTOM_THEMES_STORAGE_KEY, ACTIVE_THEME_STORAGE_KEY } from "../../constants";
import { Page, PageHeader } from "../../../src/components/page";
import { Card, CardTitle, CardContent } from "../../../src/components/card";
import { Row } from "../../../src/components/grid/Row";
import { Col } from "../../../src/components/grid/Col";
import { Select, Option } from "../../../src/components/form/Select";
import { Tabs, TabPane } from "../../../src/components/navigation/Tabs";

import themes from "../../../src/styles/themes";

export const Theming = () => {
    const updateTimeout = useRef(null);
    const { setTheme } = useContext(AppContext);
    const [showNewThemePrompt, setShowNewThemePrompt] = useState(false);
    const [themeList, setThemeList] = useState([]);
    const [activeThemeId, setActiveThemeId] = useState(null);
    const [activeTheme, setActiveTheme] = useState(null);
    const [activeTabKey, setActiveTabKey] = useState(1);

    useEffect(() => {
        const customThemes = getData(CUSTOM_THEMES_STORAGE_KEY);
        setThemeList(customThemes ? themes.concat(customThemes) : themes);
        setActiveThemeId(getData(ACTIVE_THEME_STORAGE_KEY) || "standard");
    }, []);

    useEffect(() => {
        const activeTheme = themeList?.find((t) => t.id === activeThemeId);
        setActiveTheme(activeTheme);
        setTheme(activeTheme);
        setData(ACTIVE_THEME_STORAGE_KEY, activeThemeId);
    }, [activeThemeId]);

    const fetchThemeList = () => {
        setThemeList(getData(CUSTOM_THEMES_STORAGE_KEY) || []);
    };

    const handleUpdateTheme = (theme) => {
        setActiveTheme(theme);
        clearTimeout(updateTimeout.current);
        updateTimeout.current = setTimeout(() => {
            let updatedList = themeList ? themeList.slice(0) : [];
            const themeIndex = updatedList.findIndex((t) => t.id === activeTheme.id);
            if (themeIndex >= 0) {
                updatedList[themeIndex] = theme;
                setThemeList(updatedList);
                setData(CUSTOM_THEMES_STORAGE_KEY, updatedList);
                setTheme(theme);
            }
        }, 1000);
    };

    const handleDeleteTheme = () => {
        let updatedList = themeList.filter((t) => t.id !== activeThemeId);
        setThemeList(updatedList);
        setData(CUSTOM_THEMES_STORAGE_KEY, updatedList);
        setData(ACTIVE_THEME_STORAGE_KEY, null);
        setActiveTheme(null);
        setActiveThemeId(null);
        setTheme();
    };

    return (
        <Page>
            <PageHeader title="Theming" />
            <Row>
                <Col span={24}>
                    <Card>
                        <CardTitle
                            title="Active theme"
                            actions={[{ icon: "plus", onClick: () => setShowNewThemePrompt(true) }]}
                        />
                        <CardContent>
                            <Select
                                value={activeThemeId}
                                onChange={(val) => setActiveThemeId(val === "0" ? null : val)}
                            >
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

                {activeTheme && themes.findIndex((t) => t.id === activeThemeId) < 0 ? (
                    <Col span={24}>
                        <Card>
                            <Tabs activeKey={activeTabKey} onChange={setActiveTabKey}>
                                <TabPane tabKey={1} label="Properties">
                                    <Properties theme={activeTheme} setTheme={handleUpdateTheme} />
                                </TabPane>
                                <TabPane tabKey={2} label="Editor">
                                    <Editor theme={activeTheme} setTheme={handleUpdateTheme} />
                                </TabPane>
                            </Tabs>
                        </Card>
                    </Col>
                ) : null}
            </Row>

            {/* PROMPT: New theme */}
            {showNewThemePrompt ? (
                <NewTheme
                    onClose={() => setShowNewThemePrompt(false)}
                    themeList={themeList}
                    fetchThemeList={fetchThemeList}
                    setActiveThemeId={setActiveThemeId}
                />
            ) : null}
        </Page>
    );
};
