import React from 'react';

import StoryRouter from 'storybook-router'
import { storiesOf } from '@storybook/react'
import { withReadme }  from 'storybook-readme'
import { withState } from '@dump247/storybook-state'

import Page from "../../src/components/page/Page"
import Card from "../../src/components/card/Card"
import CardContent from "../../src/components/card/CardContent"
import Paragraph from "../../src/components/typography/Paragraph"
import Badge from "../../src/components/notify/Badge"
import toast from "../../src/components/notify/Toast"
import Button from "../../src/components/button/Button"
import ButtonGroup from "../../src/components/button/ButtonGroup"
import Row from "../../src/components/grid/Row"
import Col from "../../src/components/grid/Col"
import { Popup, PopupTitle, PopupContent, PopupButtons, PopupTabs } from "../../src/components/notify/Popup"
import Text from "../../src/components/typography/Text"
import Form from "../../src/components/form/Form"
import FormItem from "../../src/components/form/FormItem"
import { Tabs, TabPane } from "../../src/components/nav/Tabs"
import Input from "../../src/components/form/Input"

import BadgeReadme from "../../src/components/notify/Badge/README.md"
import PopupReadme from "../../src/components/notify/Popup/README.md"



// Decorator
const pageDecorator = (story) => (
    <Page>
        <Card>
            <CardContent>
                {story()}
            </CardContent>
        </Card>
    </Page>
);


// Section title
const SECTION_TITLE = "10 - Notify";



/**
 * BADGE
 */
storiesOf(`${SECTION_TITLE}/Badge`, module)
    .addDecorator(pageDecorator)
    .addDecorator(withReadme(BadgeReadme))
    .add('types', () => (
        <React.Fragment>
            <Paragraph>
                <Badge>Default badge</Badge>
            </Paragraph>
            <Paragraph>
                <Badge color="primary">Primary badge</Badge>
            </Paragraph>
            <Paragraph>
                <Badge color="info">Info badge</Badge>
            </Paragraph>
            <Paragraph>
                <Badge color="success">Success badge</Badge>
            </Paragraph>
            <Paragraph>
                <Badge color="warning">Warning badge</Badge>
            </Paragraph>
            <Paragraph>
                <Badge color="error">Error badge</Badge>
            </Paragraph>
        </React.Fragment>
    ))
    .add('filled', () => (
        <React.Fragment>
            <Paragraph>
                <Badge fill>Default badge</Badge>
            </Paragraph>
            <Paragraph>
                <Badge fill color="primary">Primary badge</Badge>
            </Paragraph>
            <Paragraph>
                <Badge fill color="info">Info badge</Badge>
            </Paragraph>
            <Paragraph>
                <Badge fill color="success">Success badge</Badge>
            </Paragraph>
            <Paragraph>
                <Badge fill color="warning">Warning badge</Badge>
            </Paragraph>
            <Paragraph>
                <Badge fill color="error">Error badge</Badge>
            </Paragraph>
        </React.Fragment>
    ))
    .add('small', () => (
        <React.Fragment>
            <Paragraph>
                <Badge fill small>Default badge</Badge>
            </Paragraph>
            <Paragraph>
                <Badge fill small color="primary">Primary badge</Badge>
            </Paragraph>
            <Paragraph>
                <Badge fill small color="info">Info badge</Badge>
            </Paragraph>
            <Paragraph>
                <Badge fill small color="success">Success badge</Badge>
            </Paragraph>
            <Paragraph>
                <Badge fill small color="warning">Warning badge</Badge>
            </Paragraph>
            <Paragraph>
                <Badge fill small color="error">Error badge</Badge>
            </Paragraph>
        </React.Fragment>
    ))
    .add('round', () => (
        <React.Fragment>
            <Paragraph>
                <Badge fill round>1</Badge>
            </Paragraph>
            <Paragraph>
                <Badge fill round color="primary">99</Badge>
            </Paragraph>
            <Paragraph>
                <Badge fill round color="info">365</Badge>
            </Paragraph>
            <Paragraph>
                <Badge fill round color="success">7253</Badge>
            </Paragraph>
            <Paragraph>
                <Badge fill round color="warning">98321</Badge>
            </Paragraph>
            <Paragraph>
                <Badge fill round color="error">14.58</Badge>
            </Paragraph>
        </React.Fragment>
    ));



/**
 * TOAST
 */
storiesOf(`${SECTION_TITLE}/Toast`, module)
    .addDecorator(pageDecorator)
    // .addDecorator(withReadme(ToastReadme))
    .add('default', () => (
        <Row>
            <Col span={8}>
                <Button block color="primary" onClick={() => toast.info("This is a info toast")}>
                    Info toast
                </Button>
            </Col>
            <Col span={8}>
                <Button block color="success" onClick={() => toast.success("This is a success toast")}>
                    Success toast
                </Button>
            </Col>
            <Col span={8}>
                <Button block color="error" onClick={() => toast.error("This is an error toast")}>
                    Error toast
                </Button>
            </Col>
        </Row>
    ));



/**
 * POPUP
 */
storiesOf(`${SECTION_TITLE}/Popup`, module)
    .addDecorator(pageDecorator)
    .addDecorator(StoryRouter())
    .addDecorator(withReadme(PopupReadme))
    .add('default', withState({
        title: "Default popup",
        visible: true,
        type: null
    }, (store) => (
        <React.Fragment>
            <ButtonGroup>
                <Button iconColor="primary" icon="arrow-right" onClick={() => store.set({visible: true, type: null, title: "Default popup"})}>Show default popup</Button>
                <Button iconColor="success" icon="arrow-right" onClick={() => store.set({visible: true, type: "success", title: "Success popup"})}>Show success popup</Button>
                <Button iconColor="error" icon="arrow-right" onClick={() => store.set({visible: true, type: "error", title: "Error popup"})}>Show error popup</Button>
            </ButtonGroup>

            <Popup type={store.state.type} visible={store.state.visible} onClose={() => store.set({visible: false})}>
                <PopupTitle subtitle="This here is the subtitle">
                    {store.state.title}
                </PopupTitle>
                <PopupContent>
                    <Paragraph>
                        <Text base60>
                            Filet mignon rump strip steak short loin burgdoggen venison beef
                            jowl pork loin shoulder pork pig biltong ham hock.

                            Bacon ipsum dolor amet jowl t-bone meatloaf short ribs. Picanha pork loin frankfurter, sausage kevin cow andouille buffalo cupim porchetta boudin. Hamburger ham hock corned beef brisket strip steak kevin tenderloin. Turkey chicken bacon chuck ground round fatback. Short ribs capicola bacon tongue beef cupim brisket leberkas landjaeger bresaola chuck meatball ball tip. Picanha burgdoggen salami, prosciutto shankle tri-tip jowl pancetta kielbasa strip steak ham hock boudin ham frankfurter. Corned beef kevin leberkas, cow ball tip ham hock jowl pork belly venison turkey tri-tip turducken pork chop shoulder porchetta.

                            T-bone porchetta ham hock, spare ribs pastrami strip steak jowl. Boudin beef fatback hamburger t-bone tail pig. Ground round tri-tip pork belly shankle pastrami. Pancetta prosciutto ribeye ham hock alcatra, shankle frankfurter tri-tip andouille hamburger picanha pork belly. Pork pork chop bresaola chicken cow bacon andouille kevin short ribs meatball rump chuck capicola turducken shoulder. Pig alcatra flank fatback landjaeger ribeye, short loin biltong capicola shankle burgdoggen meatball pancetta chuck. T-bone ball tip turducken turkey ham picanha brisket prosciutto rump pork ground round.
                        </Text>
                    </Paragraph>
                    <Form>
                        <FormItem label="Type your name">
                            <Input />
                        </FormItem>
                    </Form>
                </PopupContent>
                <PopupButtons>
                    <Button color={store.state.type || "primary"} onClick={() => store.set({visible: false})}>
                        Save changes
                    </Button>
                </PopupButtons>
            </Popup>
        </React.Fragment>
    )))
    .add('scrollable content', () => (
        <Popup>
            <PopupTitle>
                Scrollable content
            </PopupTitle>
            <PopupContent scrollable>
                Filet mignon rump strip steak short loin burgdoggen venison beef jowl pork loin shoulder pork
                pig biltong ham hock. Sirloin short ribs pork loin corned beef meatloaf pig, ham cupim.
                Turkey beef pastrami filet mignon, pork loin venison beef ribs ribeye short loin.
                Landjaeger sirloin chicken doner short ribs.<br /><br />

                Jerky strip steak shank t-bone, cow pork chop frankfurter turkey kielbasa fatback shoulder.
                Ribeye drumstick tail ball tip strip steak brisket biltong pork loin frankfurter prosciutto.
                Meatball boudin ham pork belly cupim brisket alcatra salami frankfurter capicola pork loin tongue biltong pig.
                T-bone rump pastrami buffalo chuck, alcatra pancetta. Sirloin tongue sausage turducken ball tip ham cupim.
                Alcatra pork loin doner drumstick boudin.<br /><br />

                Short loin fatback sausage shank pork chop, burgdoggen ground round hamburger.
                Swine landjaeger strip steak chicken sirloin short loin fatback pork bacon turducken biltong hamburger.
                Pork chop prosciutto biltong venison boudin tongue. Jowl shankle doner buffalo swine meatball pork chop
                sirloin shank corned beef. Filet mignon capicola venison ham pig brisket salami turkey shoulder
                t-bone meatloaf ground round bresaola ribeye. Chuck cow ribeye short ribs cupim ham bacon tenderloin pork corned beef.
            </PopupContent>
            <PopupButtons>
                <Button kind="primary">
                    Save changes
                </Button>
                <Button>
                    Close
                </Button>
            </PopupButtons>
        </Popup>
    ))
    .add('with tabs', withState({
        activeKey: 1
    }, (store) => (
        <Popup>
            <PopupTitle>
                Tabbed content
            </PopupTitle>
            <PopupTabs>
                <Tabs activeKey={store.state.activeKey} onChange={(val) => store.set({activeKey: val})}>
                    <TabPane key={1} label="First tab">
                        <PopupContent>
                            Filet mignon rump strip steak short loin burgdoggen venison beef jowl pork loin shoulder pork
                            pig biltong ham hock. Sirloin short ribs pork loin corned beef meatloaf pig,
                            ham cupim. Turkey beef pastrami filet mignon,
                            pork loin venison beef ribs ribeye short loin. Landjaeger sirloin chicken doner short ribs.
                        </PopupContent>
                    </TabPane>
                    <TabPane key={2} label="Second tab">
                        <PopupContent>
                            Second tab pane content
                        </PopupContent>
                    </TabPane>
                    <TabPane key={3} label="Third tab">
                        <PopupContent>
                            Third tab pane content
                        </PopupContent>
                    </TabPane>
                    <TabPane key={4} label="Fourth tab">
                        <PopupContent>
                            Fourth tab pane content
                        </PopupContent>
                    </TabPane>
                </Tabs>
            </PopupTabs>
            <PopupButtons>
                <Button kind="primary">
                    Save changes
                </Button>
                <Button>
                    Close
                </Button>
            </PopupButtons>
        </Popup>
    )));
