import React from 'react';

import { storiesOf } from '@storybook/react'
import { withReadme }  from 'storybook-readme'
import { withState } from '@dump247/storybook-state'
import StoryRouter from 'storybook-react-router'

import { Card } from "../../src/components/card/Card"
import { CardTitle } from "../../src/components/card/CardTitle"
import { CardContent } from "../../src/components/card/CardContent"
import { Page } from "../../src/components/page/Page/index"
import { Tabs, TabPane } from "../../src/components/nav/Tabs"
import { Menu, MenuItem, MenuHeading } from "../../src/components/nav/Menu"
import { Row } from "../../src/components/grid/Row"
import { Col } from "../../src/components/grid/Col"
import { Icon } from "../../src/components/graphic/Icon"

import TabsReadme from "../../src/components/nav/Tabs/README.md"
import MenuReadme from "../../src/components/nav/Menu/README.md"

// Decorator
const pageDecorator = (story) => (
    <Page>
        {story()}
    </Page>
);


// Section title
const SECTION_TITLE = "09 - Navigation";



/**
 * TABS
 */
storiesOf(`${SECTION_TITLE}/Tabs`, module)
    .addDecorator(StoryRouter())
    .addDecorator(pageDecorator)
    .addDecorator(withReadme(TabsReadme))
    .add('default', withState({
        activeKey: 1
    }, (store) => (
        <Card>
            <CardTitle title="This is a card with tabs" />
            <Tabs activeKey={store.state.activeKey} onChange={(key) => store.set({activeKey: key})}>
                <TabPane key={1} label="First tab">
                    <CardContent>
                        First tab pane
                    </CardContent>
                </TabPane>
                <TabPane key={2} label="Second tab">
                    <CardContent>
                        Second tab pane
                    </CardContent>
                </TabPane>
                <TabPane key={3} label="Third tab">
                    <CardContent>
                        Third tab pane
                    </CardContent>
                </TabPane>
                <TabPane key={4} label="Fourth tab">
                    <CardContent>
                        Fourth tab pane
                    </CardContent>
                </TabPane>
            </Tabs>
        </Card>
    )))
    .add('with icons', withState({
        activeKey: 1
    }, (store) => (
        <Card>
            <CardTitle title="This is a card with tabs" />
            <Tabs activeKey={store.state.activeKey} onChange={(key) => store.set({activeKey: key})}>
                <TabPane key={1} label="First tab" icon="rocket">
                    <CardContent>
                        First tab pane
                    </CardContent>
                </TabPane>
                <TabPane key={2} label="Second tab" icon="feather">
                    <CardContent>
                        Second tab pane
                    </CardContent>
                </TabPane>
                <TabPane key={3} label="Third tab" icon="clock">
                    <CardContent>
                        Third tab pane
                    </CardContent>
                </TabPane>
                <TabPane key={4} label="Fourth tab" icon="palette">
                    <CardContent>
                        Fourth tab pane
                    </CardContent>
                </TabPane>
            </Tabs>
        </Card>
    )));



/**
 * MENU
 */
storiesOf(`${SECTION_TITLE}/Menu`, module)
    .addDecorator(pageDecorator)
    .addDecorator(withReadme(MenuReadme))
    .add('default', withState({
        active: 1
    }, (store) => (
        <Card>
            <CardContent>
                <Row>
                    <Col span={12}>
                        <Menu>
                            <MenuHeading label="Menu heading" />
                            <MenuItem selected={store.state.active === 1} onClick={() => store.set({active: 1})} icon="gear" label="First item" count={8} />
                            <MenuItem selected={store.state.active === 2} onClick={() => store.set({active: 2})} icon="eye" label="Second item" indicator={<Icon name="warning" warning />} count={23} />
                            <MenuItem selected={store.state.active === 3} onClick={() => store.set({active: 3})} icon="nodes" label="Third item" count={376} />
                            <MenuItem selected={store.state.active === 4} onClick={() => store.set({active: 4})} icon="palette" label="Fourth item" count={1} />
                            <MenuItem selected={store.state.active === 5} onClick={() => store.set({active: 5})} icon="user" label="Fifth item" count={6} />
                        </Menu>
                    </Col>
                </Row>
            </CardContent>
        </Card>
    )))
    .add('with heading', withState({
        active: 1
    }, (store) => (
        <Card>
            <CardContent>
                <Row>
                    <Col span={12}>
                        <Menu>
                            <MenuHeading label="Menu heading" />
                            <MenuItem selected={store.state.active === 1} onClick={() => store.set({active: 1})} label="First item" />
                            <MenuItem selected={store.state.active === 2} onClick={() => store.set({active: 2})} label="Second item" />
                            <MenuItem selected={store.state.active === 3} onClick={() => store.set({active: 3})} label="Third item" />
                            <MenuItem selected={store.state.active === 4} onClick={() => store.set({active: 4})} label="Fourth item" />
                            <MenuItem selected={store.state.active === 5} onClick={() => store.set({active: 5})} label="Fifth item" />
                        </Menu>
                    </Col>
                </Row>
            </CardContent>
        </Card>
    )))
    .add('with icons', withState({
        active: 1
    }, (store) => (
        <Card>
            <CardContent>
                <Row>
                    <Col span={12}>
                        <Menu>
                            <MenuItem selected={store.state.active === 1} onClick={() => store.set({active: 1})} icon="gear" label="First item" />
                            <MenuItem selected={store.state.active === 2} onClick={() => store.set({active: 2})} icon="eye" label="Second item" />
                            <MenuItem selected={store.state.active === 3} onClick={() => store.set({active: 3})} icon="nodes" label="Third item" />
                            <MenuItem selected={store.state.active === 4} onClick={() => store.set({active: 4})} icon="palette" label="Fourth item" />
                            <MenuItem selected={store.state.active === 5} onClick={() => store.set({active: 5})} icon="user" label="Fifth item" />
                        </Menu>
                    </Col>
                </Row>
            </CardContent>
        </Card>
    )))
    .add('with counter', withState({
        active: 1
    }, (store) => (
        <Card>
            <CardContent>
                <Row>
                    <Col span={12}>
                        <Menu>
                            <MenuItem selected={store.state.active === 1} onClick={() => store.set({active: 1})} label="First item" count={8} />
                            <MenuItem selected={store.state.active === 2} onClick={() => store.set({active: 2})} label="Second item" count={23} />
                            <MenuItem selected={store.state.active === 3} onClick={() => store.set({active: 3})} label="Third item" count={376} />
                            <MenuItem selected={store.state.active === 4} onClick={() => store.set({active: 4})} label="Fourth item" count={1} />
                            <MenuItem selected={store.state.active === 5} onClick={() => store.set({active: 5})} label="Fifth item" count={6} />
                        </Menu>
                    </Col>
                </Row>
            </CardContent>
        </Card>
    )));
