import React from 'react';

import { storiesOf } from '@storybook/react'
import { withState } from '@dump247/storybook-state'

import AppLayout from "../../src/components/layout/AppLayout"
import { AppNav, MenuHeading, Menu, MenuItem } from "../../src/components/layout/AppNav"
import AppBar from "../../src/components/layout/AppBar"
import AppContent from "../../src/components/layout/AppContent"
import Page from "../../src/components/page/Page"
import PageHeader from "../../src/components/page/PageHeader"
import Card from "../../src/components/card/Card"
import CardContent from "../../src/components/card/CardContent"
import UserMenu from "../../src/components/user/UserMenu"


// Section title
const SECTION_TITLE = "02 - Layout";

// Decorator
const pageDecorator = (story) => (
    <Page>
        {story()}
    </Page>
);

/**
 * AUTH
 */
storiesOf(`${SECTION_TITLE}`, module)
    .addDecorator(pageDecorator)
    .add('example', withState({ userMenu: false })(({ store }) => (
        <AppLayout>
            <AppBar title="Digital Historiefortelling">
                <AppBar.Item placeRight>
                    <UserMenu />
                </AppBar.Item>
            </AppBar>
            <AppNav minimal title="Digital Historiefortelling" logo={<svg fill="#ffffff" style={{display: "inline-block", height: "60px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 297"><g><polyline points="97.4 235.3 199.5 235.3 199.5 296.9 173.5 266.6 39.3 266.6 97.4 235.3" /><path d="M0.5 295.8C3.4 254 25.1 216.5 59 184.5 79.4 164.9 115.3 138.7 125.1 131.1 134.3 123.8 143.7 115.4 143.7 98.9 143.7 78.5 127.5 62.5 106.8 62.5L106.8 31.2C147.2 31.2 175.4 63.1 175.4 98.5 175.4 125.6 164.3 143.2 129.4 168 89 197.4 80.6 204.9 64.7 223 49.5 240.6 42.3 255.2 39.3 266.6L0.5 295.8Z" /><path d="M8.6 99.4C8.6 42.9 52.6 0.5 106.8 0.5L106.8 31.2C90.5 31.2 55.6 43.8 44.1 78.5L42.7 91.8 8.6 99.4Z" /><polygon points="72.7 99.4 8.6 99.4 44.1 78.5" /></g></svg>}>
                <Menu>
                    <MenuHeading>
                        Main
                    </MenuHeading>
                    <MenuItem icon="menu-squares">
                        Profile
                    </MenuItem>
                    <MenuItem icon="gear" link="/">
                        Settings
                    </MenuItem>
                    <MenuItem icon="rocket">
                        Account
                    </MenuItem>
                </Menu>
                <Menu>
                    <MenuHeading>
                        Styles
                    </MenuHeading>
                    <MenuItem icon="menu-squares">
                        Components
                    </MenuItem>
                    <MenuItem icon="gear">
                        Buttons
                    </MenuItem>
                    <MenuItem icon="rocket">
                        Icons
                    </MenuItem>
                    <MenuItem icon="menu-squares">
                        Components
                    </MenuItem>
                    <MenuItem icon="gear">
                        Buttons
                    </MenuItem>
                    <MenuItem icon="rocket">
                        Icons
                    </MenuItem>
                </Menu>
            </AppNav>
            <AppContent>
                <Page>
                    <PageHeader title="Articles" subtitle="Create new" />
                    <Card>
                        <CardContent>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                        </CardContent>
                    </Card>
                </Page>
            </AppContent>
        </AppLayout>
    )));
