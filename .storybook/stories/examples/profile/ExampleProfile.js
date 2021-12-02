import React, { useState } from "react";
import { AppLayout } from "../../../../src/components/layout/AppLayout";
import { PageHero } from "../../../../src/components/page/PageHero";
import { AppContent } from "../../../../src/components/layout/AppContent";
import { Input } from "../../../../src/components/form/Input";
import { Badge } from "../../../../src/components/notify/Badge";
import { Icon } from "../../../../src/components/graphic/Icon";
import { LogoSymbol } from "../../../../src/components/graphic/Logo";
import { ComponentWrapper } from "../../../../src/components/layout/ComponentWrapper";
import { Button } from "../../../../src/components/button/Button";
import { Page, PageNav, NavButton } from "../../../../src/components/page";
import { Image } from "../../../../src/components/media/Image";
import { SAMPLE_USER } from "../../../constants";
import { Row, Col } from "../../../../src/components/grid";
import { Card, CardTitle, CardContent } from "../../../../src/components/card";
import { Form } from "../../../../src/components/form/Form";
import { FormItem } from "../../../../src/components/form/FormItem";
import { Checkbox } from "../../../../src/components/form/Checkbox";
import { FormButtons } from "../../../../src/components/form/FormButtons";
import { ItemList } from "../../../../src/components/list/ItemList";
import { Text } from "../../../../src/components/typography";

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
                        title={SAMPLE_USER.name}
                        subtitle={SAMPLE_USER.email}
                        image={
                            <Image
                                src={SAMPLE_USER.pictureUrl}
                                scale="fill"
                                placeholder={<Icon name="user" color="primary" />}
                                mod="shine"
                            />
                        }
                    >
                        <LogoSymbol height={60} color="primary" padding="0.5rem 0 1rem 0" />
                    </PageHero>
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
                                onClick={() => setActivePageNav(3)}
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
                                            <CardTitle title="Card with item list">
                                                <Badge color="primary">878</Badge>
                                            </CardTitle>
                                            <CardContent>
                                                <ItemList
                                                    onItemClick={(item) =>
                                                        console.log("ITEM CLICKED", item)
                                                    }
                                                    onSort={(data) => console.log("SORT", data)}
                                                >
                                                    <ItemList.Item
                                                        index={1}
                                                        value={1}
                                                        prepend={
                                                            <Image
                                                                thumbnail="regular"
                                                                src="https://static.theceomagazine.net/wp-content/uploads/2018/10/15093202/elon-musk.jpg"
                                                            />
                                                        }
                                                        append={
                                                            <Badge color="success">Active</Badge>
                                                        }
                                                    >
                                                        <Text block>Elon Musk</Text>
                                                        <Text size="small" opacity={40}>
                                                            Founder of SpaceX and Tesla Motor
                                                            Company
                                                        </Text>
                                                    </ItemList.Item>
                                                    <ItemList.Item
                                                        index={2}
                                                        value={2}
                                                        prepend={
                                                            <Image
                                                                thumbnail="regular"
                                                                src="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5e88db50bfe9e50007a040b8%2F0x0.jpg"
                                                            />
                                                        }
                                                        append={
                                                            <Badge color="error">Inactive</Badge>
                                                        }
                                                    >
                                                        <Text block>Chris Sacca</Text>
                                                        <Text size="small" opacity={40}>
                                                            American venture investor, company
                                                            advisor, entrepreneur, and lawyer
                                                        </Text>
                                                    </ItemList.Item>
                                                    <ItemList.Item
                                                        index={3}
                                                        value={3}
                                                        prepend={
                                                            <Image
                                                                thumbnail="regular"
                                                                src="https://res-4.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco/v1448830269/gzcifut4c2xah95x0ewd.jpg"
                                                            />
                                                        }
                                                        append={
                                                            <Badge color="warning">Waiting</Badge>
                                                        }
                                                    >
                                                        <Text block>Mark Zuckerberg</Text>
                                                        <Text size="small" opacity={40}>
                                                            American media magnate, internet
                                                            entrepreneur, and philanthropist
                                                        </Text>
                                                    </ItemList.Item>
                                                </ItemList>
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
