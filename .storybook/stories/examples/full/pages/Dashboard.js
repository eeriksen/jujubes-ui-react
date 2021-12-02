import React, { useState, useContext } from "react";
import { AppContext } from "../../../../../src/components/layout/AppContext";
import { Page } from "../../../../../src/components/page/Page";
import { PageActions, Action } from "../../../../../src/components/page/PageActions";
import { PageHeader } from "../../../../../src/components/page/PageHeader";
import { PageNav, NavButton } from "../../../../../src/components/page/PageNav";
import { Form } from "../../../../../src/components/form/Form";
import { FormItem } from "../../../../../src/components/form/FormItem";
import { Input } from "../../../../../src/components/form/Input";
import { Textarea } from "../../../../../src/components/form/Textarea";
import { Button } from "../../../../../src/components/button/Button";
import { Badge } from "../../../../../src/components/notify/Badge";
import { Row } from "../../../../../src/components/grid/Row";
import { Col } from "../../../../../src/components/grid/Col";
import {
    Popup,
    PopupTitle,
    PopupContent,
    PopupFooter
} from "../../../../../src/components/notify/Popup";
import { Toast } from "../../../../../src/components/notify/Toast";
import { MarkupEditor } from "../../../../../src/components/markup/MarkupEditor";
import { Breadcrumb } from "../../../../../src/components/navigation/Breadcrumb/Breadcrumb";
import { Switch, Route } from "react-router-dom";
import { Details } from "./parts/Details";
import { Devices } from "./parts/Devices";
import { Theme } from "./parts/Theme";
import { Notifications } from "./parts/Notifications";
import { Settings } from "./parts/Settings";

export const Dashboard = () => {
    const { themeKey, setThemeKey } = useContext(AppContext);
    const [showCreatePagePrompt, setShowCreatePagePrompt] = useState(false);
    const [data, setData] = useState({});
    const [activePageNav, setActivePageNav] = useState(1);
    const [htmlContent, setHtmlContent] = useState(null);
    const [tableRows] = useState([
        {
            id: 1,
            firstName: "Otto",
            lastName: "Berman",
            email: "otto@berman.com",
            status: true
        },
        {
            id: 2,
            firstName: "Artichoke",
            lastName: "King",
            email: "artie@king.com",
            status: true
        },
        {
            id: 3,
            firstName: "Agostino",
            lastName: "Camancho",
            email: "ago@camancho.com",
            status: false
        },
        {
            id: 4,
            firstName: "Baldassare",
            lastName: "Amato",
            email: "baldy@amato.com",
            status: false
        },
        {
            id: 5,
            firstName: "Albert",
            lastName: "Barone",
            email: "albie@barone.com",
            status: true
        },
        {
            id: 6,
            firstName: "Paul",
            lastName: "Castellano",
            email: "paul@castellano.com",
            status: false
        }
    ]);

    const showToast = () => {
        Toast.info("This is a toast");
    };

    return (
        <Page>
            <Breadcrumb label="Dashboard" link="/dashboard" />
            <PageHeader icon="rocket" title="Example layout" subtitle="Jujubes UI" />
            <PageNav>
                <NavButton
                    icon="edit"
                    label="Details"
                    link="/details"
                />
                <NavButton
                    icon="devices"
                    label="Devices"
                    link="/devices"
                    count={
                        <Badge number fill color="error">
                            29
                        </Badge>
                    }
                />
                <NavButton
                    icon="palette"
                    label="Theme"
                    link="/theme"
                />
                <NavButton
                    icon="bell"
                    label="Notifications"
                    link="/notifications"
                />
                <NavButton
                    icon="gear"
                    label="Settings"
                    link="/settings"
                />
            </PageNav>
            <PageActions title="Actions">
                <Action
                    icon="plus"
                    label="Create a page"
                    onClick={() => setShowCreatePagePrompt(true)}
                />
                <Action icon="edit" label="Edit page" onClick={() => console.log("CLICK")} />
                <Action
                    icon="trash"
                    label="Delete page"
                    iconColor="error"
                    onClick={() => console.log("CLICK")}
                />
                <Action icon="info" label="Help">
                    All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks
                    as necessary, making this the first true generator on the Internet.
                    <br />
                    <br />
                    Lorem Ipsum generators on the Internet tend to repeat predefined chunks as
                    necessary, making this the first true generator on the Internet.
                </Action>
            </PageActions>
            <Switch>
                <Route path="/details" exact>
                    <Details />
                </Route>
                <Route path="/devices" exact>
                    <Devices />
                </Route>
                <Route path="/theme" exact>
                    <Theme />
                </Route>
                <Route path="/notifications" exact>
                    <Notifications />
                </Route>
                <Route path="/settings" exact>
                    <Settings />
                </Route>
            </Switch>

            {/* POPUP: Create page */}
            <Popup visible={showCreatePagePrompt} onClose={() => setShowCreatePagePrompt(false)}>
                <PopupTitle description="Fill in the fields below">Create a page</PopupTitle>
                <PopupContent>
                    <Form>
                        <Row>
                            <Col span={24}>
                                <MarkupEditor
                                    value={htmlContent}
                                    onChange={setHtmlContent}
                                    placeholder="Start typing here..."
                                />
                            </Col>
                            <Col span={24}>
                                <FormItem label="Title">
                                    <Input />
                                </FormItem>
                            </Col>
                            <Col span={24}>
                                <FormItem label="Description">
                                    <Textarea />
                                </FormItem>
                            </Col>
                        </Row>
                    </Form>
                </PopupContent>
                <PopupFooter>
                    <Button type="submit" color="primary">
                        Create page
                    </Button>
                </PopupFooter>
            </Popup>
        </Page>
    );
};
