import React, { useState, useContext } from "react";
import { AppContext } from "../../src/components/layout/AppContext";
import { Page } from "../../src/components/page/Page";
import { PageActions, Action } from "../../src/components/page/PageActions";
import { PageCrumbs, Crumb } from "../../src/components/page/PageCrumbs";
import { PageHeader } from "../../src/components/page/PageHeader";
import { Card } from "../../src/components/card/Card";
import { CardTitle } from "../../src/components/card/CardTitle";
import { CardContent } from "../../src/components/card/CardContent";
import { Form } from "../../src/components/form/Form";
import { FormItem } from "../../src/components/form/FormItem";
import { Input } from "../../src/components/form/Input";
import { Textarea } from "../../src/components/form/Textarea";
import { Checkbox } from "../../src/components/form/Checkbox";
import { Button } from "../../src/components/button/Button";
import { Badge } from "../../src/components/notify/Badge";
import { Row } from "../../src/components/grid/Row";
import { Col } from "../../src/components/grid/Col";
import { Popup, PopupTitle, PopupContent, PopupFooter } from "../../src/components/notify/Popup";
import { DataTable, Column, Cell } from "../../src/components/table/DataTable";
import { Select, Option } from "../../src/components/form/Select";

import * as themes from "../../src/styles/themes";

export const LayoutContent = () => {
    const { themeKey, setThemeKey } = useContext(AppContext);
    const [showCreatePagePrompt, setShowCreatePagePrompt] = useState(false);
    const [data, setData] = useState({});
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
    return (
        <Page>
            <PageHeader icon="gear" title="Example layout" subtitle="Getting started" />
            <PageCrumbs>
                <Crumb label="Start" link="/" />
                <Crumb label="Company" link="/companies" />
                <Crumb label="Layouts" link="/companies/articles" />
                <Crumb current />
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
                                <CardTitle title="Card with table" />
                                <CardContent>
                                    <DataTable
                                        rows={tableRows}
                                        onRowClick={(data) => console.log("CLICK", data)}
                                        rowModifiers={{
                                            blink: (row) => row.id === 3000,
                                            disabled: (row) => row.id === 5000
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
                                                        <Badge color="success">Active</Badge>
                                                    ) : (
                                                        <Badge color="error">Inactive</Badge>
                                                    )}
                                                </Cell>
                                            )}
                                        />
                                    </DataTable>
                                </CardContent>
                            </Card>
                        </Col>
                        <Col span={24}>
                            <Card>
                                <CardTitle title="Theme" />
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
                                    <Form responsive onSubmit={() => console.log("SUBMIT")}>
                                        <FormItem label="Your name">
                                            <Input
                                                value={data.name}
                                                onChange={(e) =>
                                                    setData({
                                                        ...data,
                                                        name: e.target.value
                                                    })
                                                }
                                                placeholder="Write here..."
                                            />
                                        </FormItem>
                                        <FormItem label="Your comment">
                                            <Textarea
                                                value={data.comment}
                                                onChange={(e) =>
                                                    setData({
                                                        ...data,
                                                        comment: e.target.value
                                                    })
                                                }
                                                placeholder="Write here..."
                                            />
                                        </FormItem>
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
                                        <FormItem>
                                            <Button type="submit" color="primary">
                                                Submit comment
                                            </Button>
                                        </FormItem>
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
                        <FormItem label="Title">
                            <Input />
                        </FormItem>
                        <FormItem label="Description">
                            <Textarea />
                        </FormItem>
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
