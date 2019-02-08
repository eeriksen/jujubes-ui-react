import React from "react"

import { storiesOf } from "@storybook/react"
import { withState } from "@dump247/storybook-state"
import { action } from "@storybook/addon-actions"
import { withReadme }  from "storybook-readme"
import StoryRouter from "storybook-router"

import AppLayout from "../../src/components/layout/AppLayout"
import AppNav from "../../src/components/layout/AppNav"
import AppBar from "../../src/components/layout/AppBar"
import AppContent from "../../src/components/layout/AppContent"
import Page from "../../src/components/page/Page"
import { PageActions, Action } from "../../src/components/page/PageActions"
import PageHeader from "../../src/components/page/PageHeader"
import PageLoader from "../../src/components/page/PageLoader"
import Card from "../../src/components/card/Card"
import CardTitle from "../../src/components/card/CardTitle"
import CardContent from "../../src/components/card/CardContent"
import UserMenu from "../../src/components/user/UserMenu"
import Form from "../../src/components/form/Form"
import FormItem from "../../src/components/form/FormItem"
import Input from "../../src/components/form/Input"
import Textarea from "../../src/components/form/Textarea"
import Checkbox from "../../src/components/form/Checkbox"
import FormButtons from "../../src/components/form/FormButtons"
import Button from "../../src/components/button/Button"
import { Select, Option } from "../../src/components/form/Select"
import Badge from "../../src/components/notify/Badge"
import { Menu, MenuItem } from "../../src/components/nav/Menu"
import Icon from "../../src/components/graphic/Icon"
import { Section, SectionTitle } from "../../src/components/layout/Section"
import { Splash, SplashTitle, SplashContent } from "../../src/components/layout/Splash"
import Text from "../../src/components/typography/Text"
import Logo from "../../src/components/graphic/Logo"

import PageLoaderReadme from "../../src/components/page/PageLoader/README.md"
import SectionReadme from "../../src/components/layout/Section/README.md"
import SplashReadme from "../../src/components/layout/Splash/README.md"


// Section title
const SECTION_TITLE = "02 - Layout";


/**
 * AUTH
 */
storiesOf(`${SECTION_TITLE}/AppLayout`, module)
    .add('example', withState({
        userMenu: false,
        name: null,
        comment: null,
        group: null,
        everyone: true,
        activeMenuItem: 1
    })(({ store }) => (
        <AppLayout>
            <AppBar title="Spesialer">
                <AppBar.Item placeRight>
                    <UserMenu
                        name="Eivind Eriksen"
                        email="mail@eivinderiksen.com"
                        picture="https://scontent.fosl3-2.fna.fbcdn.net/v/t1.0-9/44859415_10161122646425644_5424185099438522368_n.jpg?_nc_cat=103&_nc_ht=scontent.fosl3-2.fna&oh=98cf4f4abd65962c199c32e62b8d6716&oe=5CF50070"
                    >
                        <Menu>
                            <MenuItem selected={store.state.activeMenuItem === 1} onClick={() => store.set({activeMenuItem: 1})} icon="gear" label="First item" count={8} />
                            <MenuItem selected={store.state.activeMenuItem === 2} onClick={() => store.set({activeMenuItem: 2})} icon="eye" label="Second item" indicator={<Icon name="warning" color="info" />} count={23} />
                            <MenuItem selected={store.state.activeMenuItem === 3} onClick={() => store.set({activeMenuItem: 3})} icon="nodes" label="Third item" count={376} />
                            <MenuItem selected={store.state.activeMenuItem === 4} onClick={() => store.set({activeMenuItem: 4})} icon="palette" label="Fourth item" count={1} />
                            <MenuItem selected={store.state.activeMenuItem === 5} onClick={() => store.set({activeMenuItem: 5})} icon="user" label="Fifth item" count={6} />
                        </Menu>
                    </UserMenu>
                </AppBar.Item>
            </AppBar>
            <AppNav
                logo={<Logo height={60} />}
                title="Spesialer"
                subtitle="Digital historiefortelling">
                <AppNav.Menu>
                    <AppNav.MenuHeading>
                        Main
                    </AppNav.MenuHeading>
                    <AppNav.MenuItem icon="user">
                        Profile
                    </AppNav.MenuItem>
                    <AppNav.MenuItem icon="gear" link="/">
                        Settings
                    </AppNav.MenuItem>
                    <AppNav.MenuItem icon="rocket">
                        Account
                    </AppNav.MenuItem>
                </AppNav.Menu>
                <AppNav.Menu>
                    <AppNav.MenuHeading>
                        Styles
                    </AppNav.MenuHeading>
                    <AppNav.MenuItem icon="devices">
                        Components
                    </AppNav.MenuItem>
                    <AppNav.MenuItem icon="feather">
                        Buttons
                    </AppNav.MenuItem>
                    <AppNav.MenuItem icon="image" indicator={<Badge round fill color="error">34</Badge>}>
                        Icons
                    </AppNav.MenuItem>
                    <AppNav.MenuItem icon="lock">
                        Components
                    </AppNav.MenuItem>
                    <AppNav.MenuItem icon="palette">
                        Buttons
                    </AppNav.MenuItem>
                    <AppNav.MenuItem icon="puzzle">
                        Icons
                    </AppNav.MenuItem>
                </AppNav.Menu>
            </AppNav>
            <AppContent>
                <Page>
                    <PageHeader title="Articles" subtitle="Create new" crumbs={[{
                        label: "Start",
                        link: `/`
                    }, {
                        label: "Company",
                        link: `/companies`
                    }, {
                        label: "Articles",
                        link: `/articles`
                    }, {
                        label: "Edit article"
                    }]} />
                    <PageActions>
                        <Action icon="plus" onClick={action("CREATE")}>Create a page</Action>
                        <Action icon="edit" onClick={action("EDIT")}>Edit page</Action>
                        <Action icon="trash" iconColor="error" onClick={action("DELETE")}>Delete page</Action>
                    </PageActions>
                    <Card>
                        <CardTitle title="This is the card title">
                            <Badge color="success" fill>Success</Badge>
                        </CardTitle>
                        <CardContent>
                            <Section>
                                <SectionTitle>
                                    Here is a new section with the first title
                                </SectionTitle>
                                There are many variations of passages of Lorem Ipsum available, but the majority have
                                suffered alteration in some form, by injected humour, or randomised words which don't
                                look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need
                                to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem
                                Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
                                making this the first true generator on the Internet. It uses a dictionary of over
                                200 Latin words, combined with a handful of model sentence structures, to generate
                                Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always
                                free from repetition, injected humour, or non-characteristic words etc.
                            </Section>
                            <Section spacing="none">
                                <SectionTitle>
                                    Here is a new section with a title
                                </SectionTitle>
                                Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
                                making this the first true generator on the Internet. It uses a dictionary of over
                                200 Latin words, combined with a handful of model sentence structures, to generate
                                Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always
                                free from repetition, injected humour, or non-characteristic words etc.
                            </Section>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardTitle title="This is some form" actions={[{icon: "edit", onClick: action("ACTION!")}, {icon: "gear", onClick: action("ACTION!")}]} />
                        <CardContent>
                            <Form onSubmit={action("SUBMIT")}>
                                <FormItem label="Your name">
                                    <Input value={store.state.name} onChange={(e) => store.set({name: e.target.value})} placeholder="Write here..." />
                                </FormItem>
                                <FormItem label="Your comment">
                                    <Textarea value={store.state.comment} onChange={(e) => store.set({comment: e.target.value})} placeholder="Write here..." />
                                </FormItem>
                                <FormItem label="Message group">
                                    <Select placeholder="Choose a category" value={store.state.group} onChange={(val) => store.set({group: val})}>
                                        <Option value={1}>General</Option>
                                        <Option value={2}>Tips & tricks</Option>
                                        <Option value={3}>Help & guides</Option>
                                    </Select>
                                </FormItem>
                                <FormItem>
                                    <Checkbox checked={store.state.everyone} onToggle={(val) => store.set({everyone: !val})}>
                                        Send to everyone
                                    </Checkbox>
                                </FormItem>
                                <FormButtons>
                                    <Button type="submit" color="primary">
                                        Submit comment
                                    </Button>
                                    <Button onClick={() => store.set({name: null, comment: null, everyone: true})}>
                                        Clear
                                    </Button>
                                </FormButtons>
                            </Form>
                        </CardContent>
                    </Card>
                </Page>
            </AppContent>
        </AppLayout>
    )));





/**
 * PAGE HEADER
 */
storiesOf(`${SECTION_TITLE}/PageHeader`, module)
    .addDecorator(StoryRouter())
    // .addDecorator(withReadme(PageHeaderReadme))
    .add('default', () => (
        <AppLayout>
            <AppContent>
                <Page>
                    <PageHeader title="Page header" subtitle="Sub title" />
                </Page>
            </AppContent>
        </AppLayout>
    ))
    .add('with breadcrumbs', () => {

        const crumbs = [{
            label: "Home",
            handler: action('home')
        }, {
            label: "Section",
            handler: action('section')
        }, {
            label: "Active page"
        }];

        return (
            <AppLayout>
                <AppContent>
                    <Page>
                        <PageHeader title="Page header" subtitle="Sub title" crumbs={crumbs} />
                    </Page>
                </AppContent>
            </AppLayout>
        )
    });



/**
 * PAGE ACTIONS
 */
storiesOf(`${SECTION_TITLE}/PageActions`, module)
    .addDecorator(StoryRouter())
    // .addDecorator(withReadme(PageHeaderReadme))
    .add('default', () => (
        <AppLayout>
            <AppContent>
                <Page>
                    <PageHeader title="Page header" subtitle="Sub title" />
                    <PageActions>
                        <Action icon="plus" onClick={action("CREATE")}>Create a page</Action>
                        <Action icon="edit" onClick={action("EDIT")}>Edit page</Action>
                        <Action icon="trash" iconColor="error" onClick={action("DELETE")}>Delete page</Action>
                    </PageActions>
                </Page>
            </AppContent>
        </AppLayout>
    ));


/**
 * PAGE LOADER
 */
storiesOf(`${SECTION_TITLE}/PageLoader`, module)
    .addDecorator(withReadme(PageLoaderReadme))
    .add('default', () => (
        <AppLayout>
            <AppContent>
                <PageLoader />
            </AppContent>
        </AppLayout>
    ));



/**
 * SECTION
 */
storiesOf(`${SECTION_TITLE}/Section`, module)
    .addDecorator(withReadme(SectionReadme))
    .add('default', () => (
        <AppLayout>
            <AppContent>
                <Page>
                    <Card>
                        <CardContent>
                            <Section>
                                Bacon ipsum dolor amet jerky ribeye bacon, hamburger swine cupim strip steak jowl doner
                                prosciutto meatball ball tip short loin pork belly tail. Shankle cupim boudin,
                                brisket pork loin venison t-bone filet mignon cow strip steak short loin pork pastrami tongue chuck.
                                Pancetta tenderloin ham hock, landjaeger sirloin pork belly tongue. Jowl beef turducken,
                                flank buffalo beef ribs kielbasa prosciutto chuck. Hamburger tongue buffalo ham beef strip
                                steak doner. Cupim ribeye doner, prosciutto tail meatball turducken drumstick rump.
                            </Section>
                            <Section>
                                Bresaola ball tip shoulder bacon, boudin drumstick ribeye. Porchetta ribeye chuck sausage kielbasa
                                t-bone rump. Strip steak shankle cow rump. Ribeye tail andouille bacon fatback frankfurter
                                cupim leberkas meatloaf filet mignon t-bone venison ham spare ribs. Jerky pancetta
                                spare ribs ground round, porchetta kielbasa short loin. Ground round rump tri-tip
                                strip steak t-bone meatloaf.
                            </Section>
                            <Section>
                                Filet mignon rump strip steak short loin burgdoggen venison beef jowl pork loin shoulder
                                pork pig biltong ham hock. Sirloin short ribs pork loin corned beef meatloaf pig, ham cupim.
                                Turkey beef pastrami filet mignon, pork loin venison beef ribs ribeye short loin.
                                Landjaeger sirloin chicken doner short ribs.
                            </Section>
                        </CardContent>
                    </Card>
                </Page>
            </AppContent>
        </AppLayout>
    ))
    .add('with title', () => (
        <AppLayout>
            <AppContent>
                <Page>
                    <Card>
                        <CardContent>
                            <Section>
                                <SectionTitle>
                                    First section title
                                </SectionTitle>

                                Bacon ipsum dolor amet jerky ribeye bacon, hamburger swine cupim strip steak jowl doner
                                prosciutto meatball ball tip short loin pork belly tail. Shankle cupim boudin,
                                brisket pork loin venison t-bone filet mignon cow strip steak short loin pork pastrami tongue chuck.
                                Pancetta tenderloin ham hock, landjaeger sirloin pork belly tongue. Jowl beef turducken,
                                flank buffalo beef ribs kielbasa prosciutto chuck. Hamburger tongue buffalo ham beef strip
                                steak doner. Cupim ribeye doner, prosciutto tail meatball turducken drumstick rump.
                            </Section>
                            <Section>
                                <SectionTitle>
                                    Second section title
                                </SectionTitle>

                                Bresaola ball tip shoulder bacon, boudin drumstick ribeye. Porchetta ribeye chuck sausage kielbasa
                                t-bone rump. Strip steak shankle cow rump. Ribeye tail andouille bacon fatback frankfurter
                                cupim leberkas meatloaf filet mignon t-bone venison ham spare ribs. Jerky pancetta
                                spare ribs ground round, porchetta kielbasa short loin. Ground round rump tri-tip
                                strip steak t-bone meatloaf.
                            </Section>
                            <Section>
                                <SectionTitle>
                                    Third section title
                                </SectionTitle>

                                Filet mignon rump strip steak short loin burgdoggen venison beef jowl pork loin shoulder
                                pork pig biltong ham hock. Sirloin short ribs pork loin corned beef meatloaf pig, ham cupim.
                                Turkey beef pastrami filet mignon, pork loin venison beef ribs ribeye short loin.
                                Landjaeger sirloin chicken doner short ribs.
                            </Section>
                        </CardContent>
                    </Card>
                </Page>
            </AppContent>
        </AppLayout>
    ));


/**
 * SPLASH
 */
storiesOf(`${SECTION_TITLE}/Splash`, module)
    .addDecorator(withReadme(SplashReadme))
    .add('with login form', withState({
        username: null,
        password: null
    })(({ store }) => (
        <Splash
            logo={<svg fill="#ffffff" style={{display: "inline-block", height: "80px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 297"><g><polyline points="97.4 235.3 199.5 235.3 199.5 296.9 173.5 266.6 39.3 266.6 97.4 235.3" /><path d="M0.5 295.8C3.4 254 25.1 216.5 59 184.5 79.4 164.9 115.3 138.7 125.1 131.1 134.3 123.8 143.7 115.4 143.7 98.9 143.7 78.5 127.5 62.5 106.8 62.5L106.8 31.2C147.2 31.2 175.4 63.1 175.4 98.5 175.4 125.6 164.3 143.2 129.4 168 89 197.4 80.6 204.9 64.7 223 49.5 240.6 42.3 255.2 39.3 266.6L0.5 295.8Z" /><path d="M8.6 99.4C8.6 42.9 52.6 0.5 106.8 0.5L106.8 31.2C90.5 31.2 55.6 43.8 44.1 78.5L42.7 91.8 8.6 99.4Z" /><polygon points="72.7 99.4 8.6 99.4 44.1 78.5" /></g></svg>}
            footer={<React.Fragment><Text block>TV 2 Labs</Text><Text block opacity=".5">https://www.tv2.no</Text></React.Fragment>}
        >
            <SplashTitle title="Sign in" description="Sign in with your company email and password." />
            <SplashContent>
                <Form>
                    <FormItem>
                        <Input value={store.state.username} onChange={(e) => store.set({username: e.target.value})} icon="user" placeholder="Your email" />
                    </FormItem>
                    <FormItem>
                        <Input value={store.state.password} onChange={(e) => store.set({password: e.target.value})} icon="lock" type="password" placeholder="Your password" />
                    </FormItem>
                    <FormButtons>
                        <Button type="submit" color="primary" block>
                            Sign in
                        </Button>
                    </FormButtons>
                </Form>
            </SplashContent>
        </Splash>
    )));
