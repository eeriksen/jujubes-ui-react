import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { AppLayout } from "../../../../src/components/layout/AppLayout";
import { AppNav } from "../../../../src/components/layout/AppNav";
import { AppBar } from "../../../../src/components/layout/AppBar";
import { PageHero } from "../../../../src/components/page/PageHero";
import { AppContent } from "../../../../src/components/layout/AppContent";
import { UserMenu } from "../../../../src/components/user/UserMenu";
import { Input } from "../../../../src/components/form/Input";
import { Badge } from "../../../../src/components/notify/Badge";
import { Menu, MenuItem } from "../../../../src/components/navigation/Menu";
import { Icon } from "../../../../src/components/graphic/Icon";
import { Text } from "../../../../src/components/typography/Text";
import { LogoSymbol } from "../../../../src/components/graphic/Logo";
import { ComponentWrapper } from "../../../../src/components/layout/ComponentWrapper";
import { Button } from "../../../../src/components/button/Button";
import { Page, PageNav, NavButton } from "../../../../src/components/page";
import { Image } from "../../../../src/components/media/Image";
import { SAMPLE_USER } from "../../../constants";
import { Row, Col } from "../../../../src/components/grid";
import { Card, CardTitle, CardContent } from "../../../../src/components/card";
import { Toolbar } from "../../../../src/components/navigation/Toolbar";
import { Select, Option } from "../../../../src/components/form/Select";
import { CardLoadMore } from "../../../../src/components/card/CardLoadMore";
import { Form } from "../../../../src/components/form/Form";
import { FormItem } from "../../../../src/components/form/FormItem";
import { Checkbox } from "../../../../src/components/form/Checkbox";
import { FormButtons } from "../../../../src/components/form/FormButtons";

export const ExampleProfile = () => {
    const [activePageNav, setActivePageNav] = useState(1);
    const [activeMenuItem, setActiveMenuItem] = useState(1);
    const [searchTerm, setSearchTerm] = useState(null);
    const [data, setData] = useState({});
    return (
        <ComponentWrapper>
            <AppLayout>
                <AppContent>
                    <PageHero
                        logo={<LogoSymbol height={40} />}
                        title={SAMPLE_USER.name}
                        subtitle={SAMPLE_USER.email}
                        image={
                            <Image
                                src={SAMPLE_USER.pictureUrl}
                                scale="fill"
                                placeholder={<Icon name="user" color="primary" />}
                            />
                        }
                    />
                    <Page>
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
                                                There are many variations of passages of Lorem Ipsum
                                                available, but the majority have suffered alteration
                                                in some form, by injected humour, or randomised
                                                words which don't look even slightly believable. If
                                                you are going to use a passage of Lorem Ipsum, you
                                                need to be sure there isn't anything embarrassing
                                                hidden in the middle of text. All the Lorem Ipsum
                                                generators on the Internet tend to repeat predefined
                                                chunks as necessary, making this the first true
                                                generator on the Internet. It uses a dictionary of
                                                over 200 Latin words, combined with a handful of
                                                model sentence structures, to generate Lorem Ipsum
                                                which looks reasonable. The generated Lorem Ipsum is
                                                therefore always free from repetition, injected
                                                humour, or non-characteristic words etc.
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
                                                            <Toolbar.Item
                                                                divideRight
                                                                shrink={false}
                                                            >
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
                                                </Row>
                                            </CardContent>
                                            <CardLoadMore
                                                progress={30}
                                                onClick={() => console.log("CLICK")}
                                            />
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
                                                                <Button
                                                                    type="submit"
                                                                    color="primary"
                                                                >
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
                                                All the Lorem Ipsum generators on the Internet tend
                                                to repeat predefined chunks as necessary, making
                                                this the first true generator on the Internet.
                                            </CardContent>
                                        </Card>
                                    </Col>
                                    <Col sm={12} lg={24}>
                                        <Card>
                                            <CardTitle title="Card with table" />
                                            <CardContent>
                                                All the Lorem Ipsum generators on the Internet tend
                                                to repeat predefined chunks as necessary, making
                                                this the first true generator on the Internet.
                                            </CardContent>
                                        </Card>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Page>
                </AppContent>
            </AppLayout>
        </ComponentWrapper>
    );
};
