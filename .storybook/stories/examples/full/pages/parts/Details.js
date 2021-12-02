import React, { useState, useContext } from "react";
import { AppContext } from "../../../../../../src/components/layout/AppContext";
import { Card } from "../../../../../../src/components/card/Card";
import { CardTitle } from "../../../../../../src/components/card/CardTitle";
import { CardContent } from "../../../../../../src/components/card/CardContent";
import { CardLoadMore } from "../../../../../../src/components/card/CardLoadMore";
import { Form } from "../../../../../../src/components/form/Form";
import { FormItem } from "../../../../../../src/components/form/FormItem";
import { FormButtons } from "../../../../../../src/components/form/FormButtons";
import { Input } from "../../../../../../src/components/form/Input";
import { Checkbox } from "../../../../../../src/components/form/Checkbox";
import { Button } from "../../../../../../src/components/button/Button";
import { Badge } from "../../../../../../src/components/notify/Badge";
import { Image } from "../../../../../../src/components/media/Image";
import { Row } from "../../../../../../src/components/grid/Row";
import { Col } from "../../../../../../src/components/grid/Col";
import { DataTable, Column, Cell } from "../../../../../../src/components/table/DataTable";
import { Select, Option } from "../../../../../../src/components/form/Select";
import { Toolbar } from "../../../../../../src/components/navigation/Toolbar";
import { Menu, MenuItem } from "../../../../../../src/components/navigation/Menu";
import { MarkupEditor } from "../../../../../../src/components/markup/MarkupEditor";
import { Breadcrumb } from "../../../../../../src/components/navigation/Breadcrumb/Breadcrumb";

export const Details = () => {
    const [data, setData] = useState({});
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

    return (
        <Row>
            <Col span={24}>
                <Breadcrumb label="Details" link="/details" />
                <Card>
                    <CardTitle title="This is the card title">
                        <Badge color="success" fill>
                            Success
                        </Badge>
                    </CardTitle>
                    <CardContent>
                        There are many variations of passages of Lorem Ipsum available, but the
                        majority have suffered alteration in some form, by injected humour, or
                        randomised words which don't look even slightly believable. If you are going
                        to use a passage of Lorem Ipsum, you need to be sure there isn't anything
                        embarrassing hidden in the middle of text. All the Lorem Ipsum generators on
                        the Internet tend to repeat predefined chunks as necessary, making this the
                        first true generator on the Internet. It uses a dictionary of over 200 Latin
                        words, combined with a handful of model sentence structures, to generate
                        Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore
                        always free from repetition, injected humour, or non-characteristic words
                        etc.
                    </CardContent>
                </Card>
            </Col>
            <Col span={24}>
                <Card>
                    <CardTitle title="Markup editor" />
                    <CardContent>
                        <MarkupEditor
                            value={htmlContent}
                            onChange={setHtmlContent}
                            placeholder="Start typing here..."
                        />
                    </CardContent>
                </Card>
            </Col>
            <Col span={24}>
                <Card>
                    <CardTitle
                        title="Card with table"
                        actions={[
                            {
                                icon: "more",
                                content: ({ onClose }) => (
                                    <Menu>
                                        <MenuItem
                                            icon="plus"
                                            label="Create something"
                                            onClick={() => console.log("CREATE") | onClose()}
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
                    >
                        <Badge color="primary">878</Badge>
                    </CardTitle>
                    <CardContent>
                        <Row>
                            <Col span={24}>
                                <Toolbar>
                                    <Toolbar.Item grow divideRight>
                                        <Input size="small" icon="search" placeholder="Search" />
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
                                        <Button icon="close" iconColor="error" size="small">
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
                                    <Column label="ID" cell={({ row }) => <Cell>{row.id}</Cell>} />
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
                            </Col>
                        </Row>
                    </CardContent>
                    <CardLoadMore progress={30} onClick={() => console.log("CLICK")} />
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
                                    <FormItem
                                        label="First Name"
                                        info="Fill in your first name here."
                                    >
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
                                        <Button color="silent" onClick={() => setData({})}>
                                            Reset
                                        </Button>
                                    </FormButtons>
                                </Col>
                            </Row>
                        </Form>
                    </CardContent>
                </Card>
            </Col>
            <Col span={24}>
                <Card>
                    <CardTitle
                        title="This is some form"
                        actions={[
                            {
                                icon: "plus",
                                onClick: () => console.log("CLICK")
                            }
                        ]}
                    />
                    <CardContent>
                        <Form onSubmit={() => console.log("SUBMIT")}>
                            <Row>
                                <Col
                                    md={14}
                                    sm={{ span: 16, order: 1 }}
                                    xs={{ span: 24, order: 2 }}
                                >
                                    <Row>
                                        <Col sm={24}>
                                            <FormItem
                                                label="First Name"
                                                info="Fill in your first name here."
                                            >
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
                                        <Col sm={24}>
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
                                        <Col sm={24}>
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
                                        <Col sm={24}>
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
                                    </Row>
                                </Col>
                                <Col
                                    md={{ span: 10 }}
                                    sm={{ span: 8, order: 2 }}
                                    xs={{ span: 24, order: 1 }}
                                >
                                    <FormItem label="Image">
                                        <Image
                                            scale="square"
                                            mod="rounded"
                                            placeholderIcon="upload"
                                            onFileSelect={console.log}
                                        />
                                    </FormItem>
                                </Col>
                            </Row>
                        </Form>
                    </CardContent>
                    <CardContent border="top">
                        <FormButtons>
                            <Button type="submit" color="primary">
                                Save changes
                            </Button>
                            <Button color="silent" onClick={() => setData({})}>
                                Reset
                            </Button>
                        </FormButtons>
                    </CardContent>
                </Card>
            </Col>
        </Row>
    );
};
