import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../../../../src/components/layout/AppContext";
import { Page } from "../../../../../src/components/page/Page";
import { PageActions, Action } from "../../../../../src/components/page/PageActions";
import { PageCrumbs, Crumb } from "../../../../../src/components/page/PageCrumbs";
import { PageHeader } from "../../../../../src/components/page/PageHeader";
import { PageNav, NavButton } from "../../../../../src/components/page/PageNav";
import { Card } from "../../../../../src/components/card/Card";
import { CardTitle } from "../../../../../src/components/card/CardTitle";
import { CardContent } from "../../../../../src/components/card/CardContent";
import { CardLoadMore } from "../../../../../src/components/card/CardLoadMore";
import { Form } from "../../../../../src/components/form/Form";
import { FormItem } from "../../../../../src/components/form/FormItem";
import { FormButtons } from "../../../../../src/components/form/FormButtons";
import { Input } from "../../../../../src/components/form/Input";
import { Textarea } from "../../../../../src/components/form/Textarea";
import { Checkbox } from "../../../../../src/components/form/Checkbox";
import { Button } from "../../../../../src/components/button/Button";
import { Badge } from "../../../../../src/components/notify/Badge";
import { Row } from "../../../../../src/components/grid/Row";
import { Col } from "../../../../../src/components/grid/Col";
import { Popup, PopupTitle, PopupContent, PopupFooter } from "../../../../../src/components/notify/Popup";
import { DataTable, Column, Cell } from "../../../../../src/components/table/DataTable";
import { Select, Option } from "../../../../../src/components/form/Select";
import { Toast } from "../../../../../src/components/notify/Toast";
import { Toolbar } from "../../../../../src/components/navigation/Toolbar";
import { Menu, MenuItem } from "../../../../../src/components/navigation/Menu";

import * as themes from "../../../../../src/styles/themes";

export const Dashboard = () => {
    const { themeKey, setThemeKey } = useContext(AppContext);
    const [showCreatePagePrompt, setShowCreatePagePrompt] = useState(false);
    const [data, setData] = useState({});
    const [busyLoading, setBusyLoading] = useState(true);
    const [activePageNav, setActivePageNav] = useState(1);
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

    useEffect(() => {
        setTimeout(() => {
            setBusyLoading(false);
        }, 1000);
    }, []);

    return (
        <Page loading={busyLoading}>
            <PageHeader icon="rocket" title="Example layout" subtitle="Jujubes UI" />
            <PageCrumbs>
                <Crumb label="Start" link="/" />
                <Crumb label="Company" link="/companies" />
                <Crumb label="Layouts" link="/companies/articles" />
            </PageCrumbs>
            <PageActions>
                <Action icon="plus" onClick={() => setShowCreatePagePrompt(true)}>
                    Create a page
                </Action>
                <Action icon="edit" onClick={() => console.log("CLICK")}>
                    Edit page
                </Action>
                <Action icon="trash" iconColor="error" onClick={() => console.log("CLICK")}>
                    Delete page
                </Action>
            </PageActions>
            <PageNav>
                <NavButton
                    active={activePageNav === 1}
                    onClick={() => setActivePageNav(1)}
                    icon="edit"
                    label="Details"
                />
                <NavButton
                    active={activePageNav === 2}
                    onClick={() => setActivePageNav(2)}
                    icon="devices"
                    label="Devices"
                    count={
                        <Badge number fill color="accent">
                            29
                        </Badge>
                    }
                />
                <NavButton
                    active={activePageNav === 3}
                    onClick={() => setActivePageNav(3) || showToast()}
                    icon="palette"
                    label="Theme"
                />
                <NavButton
                    active={activePageNav === 4}
                    onClick={() => setActivePageNav(4)}
                    icon="bell"
                    label="Notifications"
                />
                <NavButton
                    active={activePageNav === 5}
                    onClick={() => setActivePageNav(5)}
                    icon="gear"
                    label="Settings"
                />
            </PageNav>
            <Row>
                <Col lg={18}>
                    <Row>
                        <Col span={24}>
                            <Card>
                                <CardTitle title="This is the card title">
                                    <Badge color="success" fill>
                                        Success
                                    </Badge>
                                </CardTitle>
                                <CardContent>
                                    There are many variations of passages of Lorem Ipsum available,
                                    but the majority have suffered alteration in some form, by
                                    injected humour, or randomised words which don't look even
                                    slightly believable. If you are going to use a passage of Lorem
                                    Ipsum, you need to be sure there isn't anything embarrassing
                                    hidden in the middle of text. All the Lorem Ipsum generators on
                                    the Internet tend to repeat predefined chunks as necessary,
                                    making this the first true generator on the Internet. It uses a
                                    dictionary of over 200 Latin words, combined with a handful of
                                    model sentence structures, to generate Lorem Ipsum which looks
                                    reasonable. The generated Lorem Ipsum is therefore always free
                                    from repetition, injected humour, or non-characteristic words
                                    etc.
                                </CardContent>
                            </Card>
                        </Col>
                        <Col span={24}>
                            <Card>
                                <CardTitle title="Card with table">
                                    <Badge color="primary">878</Badge>
                                </CardTitle>
                                <CardContent>
                                    <Row>
                                        <Col span={24}>
                                            <Toolbar>
                                                <Toolbar.Item grow divideRight>
                                                    <Input
                                                        size="small"
                                                        icon="search"
                                                        placeholder="Search"
                                                    />
                                                </Toolbar.Item>
                                                <Toolbar.Item divideRight shrink={false}>
                                                    <Select value={50} size="small">
                                                        <Option>10</Option>
                                                        <Option>25</Option>
                                                        <Option>50</Option>
                                                        <Option>100</Option>
                                                    </Select>
                                                </Toolbar.Item>
                                                <Toolbar.Item>
                                                    <Button
                                                        icon="close"
                                                        iconColor="error"
                                                        size="small"
                                                    >
                                                        Clear
                                                    </Button>
                                                </Toolbar.Item>
                                            </Toolbar>
                                        </Col>
                                        <Col span={24}>
                                            <DataTable
                                                rows={tableRows}
                                                onRowClick={(data) => console.log("CLICK", data)}
                                                onLoadMore={() => console.log("LOAD MORE")}
                                                rowModifiers={{
                                                    blink: (row) => row.id === 3000,
                                                    disabled: (row) => row.id === 4000
                                                }}
                                            >
                                                <Column
                                                    label="ID"
                                                    cell={({ row }) => <Cell>{row.id}</Cell>}
                                                />
                                                <Column
                                                    label="First name"
                                                    cell={({ row }) => <Cell>{row.firstName}</Cell>}
                                                />
                                                <Column
                                                    label="Last name"
                                                    cell={({ row }) => <Cell>{row.lastName}</Cell>}
                                                />
                                                <Column
                                                    label="E-mail"
                                                    cell={({ row }) => <Cell>{row.email}</Cell>}
                                                />
                                                <Column
                                                    label="Status"
                                                    cell={({ row }) => (
                                                        <Cell>
                                                            {row.status ? (
                                                                <Badge color="success">
                                                                    Active
                                                                </Badge>
                                                            ) : (
                                                                <Badge color="error">
                                                                    Inactive
                                                                </Badge>
                                                            )}
                                                        </Cell>
                                                    )}
                                                />
                                            </DataTable>
                                        </Col>
                                    </Row>
                                </CardContent>
                                <CardLoadMore progress={30} onClick={() => console.log("CLICK")} />
                            </Card>
                        </Col>
                        <Col span={24}>
                            <Card>
                                <CardTitle
                                    title="Theme"
                                    actions={[
                                        {
                                            icon: "more",
                                            content: ({onClose}) => (
                                                <Menu>
                                                    <MenuItem
                                                        icon="plus"
                                                        label="Create something"
                                                        onClick={() => console.log("CREATE") | onClose()}
                                                    />
                                                    <MenuItem icon="edit" label="Edit something" />
                                                    <MenuItem
                                                        icon="trash"
                                                        iconColor="error"
                                                        label="Delete something"
                                                    />
                                                </Menu>
                                            )
                                        }
                                    ]}
                                />
                                <CardContent>
                                    <Select value={themeKey} onChange={setThemeKey}>
                                        {Object.keys(themes).map((key) => (
                                            <Option key={key} value={key}>
                                                {key}
                                            </Option>
                                        ))}
                                    </Select>
                                </CardContent>
                            </Card>
                        </Col>
                        <Col span={24}>
                            <Card>
                                <CardTitle
                                    title="This is some form"
                                    actions={[
                                        {
                                            icon: "edit",
                                            onClick: () => console.log("CLICK")
                                        },
                                        {
                                            icon: "gear",
                                            onClick: () => console.log("CLICK")
                                        }
                                    ]}
                                />
                                <CardContent>
                                    <Form onSubmit={() => console.log("SUBMIT")}>
                                        <Row>
                                            <Col sm={12}>
                                                <FormItem label="First Name">
                                                    <Input
                                                        value={data.firstName}
                                                        onChange={(value) =>
                                                            setData({
                                                                ...data,
                                                                firstName: value
                                                            })
                                                        }
                                                        placeholder="John"
                                                    />
                                                </FormItem>
                                            </Col>
                                            <Col sm={12}>
                                                <FormItem label="Last Name">
                                                    <Input
                                                        value={data.lastName}
                                                        onChange={(value) =>
                                                            setData({
                                                                ...data,
                                                                lastName: value
                                                            })
                                                        }
                                                        placeholder="Doe"
                                                    />
                                                </FormItem>
                                            </Col>
                                            <Col sm={12}>
                                                <FormItem label="Email">
                                                    <Input
                                                        value={data.email}
                                                        type="email"
                                                        onChange={(value) =>
                                                            setData({
                                                                ...data,
                                                                email: value
                                                            })
                                                        }
                                                        placeholder="john.doe@online.com"
                                                    />
                                                </FormItem>
                                            </Col>
                                            <Col sm={12}>
                                                <FormItem label="Mobile">
                                                    <Input
                                                        value={data.mobile}
                                                        typ="tel"
                                                        onChange={(value) =>
                                                            setData({
                                                                ...data,
                                                                mobile: value
                                                            })
                                                        }
                                                        placeholder="+47 999 88 777"
                                                    />
                                                </FormItem>
                                            </Col>
                                            <Col span={24}>
                                                <FormItem>
                                                    <Checkbox
                                                        checked={data.checked}
                                                        onChange={(val) =>
                                                            setData({
                                                                ...data,
                                                                checked: val
                                                            })
                                                        }
                                                    >
                                                        Send to everyone
                                                    </Checkbox>
                                                </FormItem>
                                            </Col>
                                            <Col span={24}>
                                                <FormButtons>
                                                    <Button type="submit" color="primary">
                                                        Save changes
                                                    </Button>
                                                    <Button onClick={() => setData({})}>
                                                        Reset
                                                    </Button>
                                                </FormButtons>
                                            </Col>
                                        </Row>
                                    </Form>
                                </CardContent>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col lg={6}>
                    <Row>
                        <Col sm={12} lg={24}>
                            <Card>
                                <CardTitle title="Small card" />
                                <CardContent>
                                    All the Lorem Ipsum generators on the Internet tend to repeat
                                    predefined chunks as necessary, making this the first true
                                    generator on the Internet.
                                </CardContent>
                            </Card>
                        </Col>
                        <Col sm={12} lg={24}>
                            <Card>
                                <CardTitle title="Card with table" />
                                <CardContent>
                                    All the Lorem Ipsum generators on the Internet tend to repeat
                                    predefined chunks as necessary, making this the first true
                                    generator on the Internet.
                                </CardContent>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>

            {/* POPUP: Create page */}
            <Popup visible={showCreatePagePrompt} onClose={() => setShowCreatePagePrompt(false)}>
                <PopupTitle description="Fill in the fields below">Create a page</PopupTitle>
                <PopupContent>
                    <Form>
                        <Row>
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
