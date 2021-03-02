import React, { useState } from "react";
import { AppLayout } from "../../src/components/layout/AppLayout";
import { AppNav } from "../../src/components/layout/AppNav";
import { AppBar } from "../../src/components/layout/AppBar";
import { AppContent } from "../../src/components/layout/AppContent";
import { UserMenu } from "../../src/components/user/UserMenu";
import { Input } from "../../src/components/form/Input";
import { Badge } from "../../src/components/notify/Badge";
import { Menu, MenuItem } from "../../src/components/navigation/Menu";
import { Icon } from "../../src/components/graphic/Icon";
import { Text } from "../../src/components/typography/Text";
import { Logo } from "../../src/components/graphic/Logo";
import { ComponentWrapper } from "../../src/components/layout/ComponentWrapper";

import { user } from "../constants";

export const ExampleWrapper = ({children}) => {
    const [activeMenuItem, setActiveMenuItem] = useState(1);
    const [searchTerm, setSearchTerm] = useState(null);
    return (
        <ComponentWrapper>
            <AppLayout>
                <AppBar title="Spesialer">
                    <AppBar.Item placeLeft>
                        <Input
                            value={searchTerm}
                            size="small"
                            icon="search"
                            onChange={setSearchTerm}
                            placeholder="Search"
                        />
                    </AppBar.Item>
                    <AppBar.Item placeRight>
                        <UserMenu name={user.name} email={user.email} picture={user.pictureUrl}>
                            <Menu>
                                <MenuItem
                                    selected={activeMenuItem === 1}
                                    onClick={() => setActiveMenuItem(1)}
                                    icon="gear"
                                    label="First item"
                                    count={8}
                                />
                                <MenuItem
                                    selected={activeMenuItem === 2}
                                    onClick={() => setActiveMenuItem(2)}
                                    icon="eye"
                                    label="Second item"
                                    indicator={<Icon name="warning" color="info" />}
                                    count={23}
                                />
                                <MenuItem
                                    selected={activeMenuItem === 3}
                                    onClick={() => setActiveMenuItem(3)}
                                    icon="nodes"
                                    label="Third item"
                                    count={376}
                                />
                                <MenuItem
                                    selected={activeMenuItem === 4}
                                    onClick={() => setActiveMenuItem(4)}
                                    icon="palette"
                                    label="Fourth item"
                                    count={1}
                                />
                                <MenuItem
                                    selected={activeMenuItem === 5}
                                    onClick={() => setActiveMenuItem(5)}
                                    icon="user"
                                    label="Fifth item"
                                    count={6}
                                />
                            </Menu>
                        </UserMenu>
                    </AppBar.Item>
                </AppBar>
                <AppNav
                    logo={<Logo width={100} />}
                    title={
                        <React.Fragment>
                            <Text block size="large" weight="medium">
                                Example page
                            </Text>
                        </React.Fragment>
                    }
                >
                    <AppNav.Menu>
                        <AppNav.MenuHeading>Main</AppNav.MenuHeading>
                        <AppNav.MenuItem icon="user">Profile</AppNav.MenuItem>
                        <AppNav.MenuItem icon="gear" link="/">
                            Settings
                        </AppNav.MenuItem>
                        <AppNav.MenuItem icon="rocket">Account</AppNav.MenuItem>
                    </AppNav.Menu>
                    <AppNav.Menu>
                        <AppNav.MenuHeading>Styles</AppNav.MenuHeading>
                        <AppNav.MenuItem icon="devices">Components</AppNav.MenuItem>
                        <AppNav.MenuItem icon="feather">Buttons</AppNav.MenuItem>
                        <AppNav.MenuItem
                            icon="image"
                            indicator={
                                <Badge number fill color="error">
                                    34
                                </Badge>
                            }
                        >
                            Icons
                        </AppNav.MenuItem>
                        <AppNav.MenuItem icon="lock">Forms</AppNav.MenuItem>
                        <AppNav.MenuItem icon="palette">Popups</AppNav.MenuItem>
                        <AppNav.MenuItem icon="puzzle">Pages</AppNav.MenuItem>
                    </AppNav.Menu>
                </AppNav>
                <AppContent>
                    {children}
                </AppContent>
            </AppLayout>
        </ComponentWrapper>
    );
};
