import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { AppLayout } from "../../../../src/components/layout/AppLayout";
import { AppNav } from "../../../../src/components/layout/AppNav";
import { AppBar } from "../../../../src/components/layout/AppBar";
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
import { Dashboard } from "./pages/Dashboard";
import { SAMPLE_USER } from "../../../constants";
import { Breadcrumb } from "../../../../src/components/navigation/Breadcrumb/Breadcrumb";
import { BreadcrumbTrail } from "../../../../src/components/navigation/BreadcrumbTrail";

export const ExampleFull = () => {
    const [activeMenuItem, setActiveMenuItem] = useState(1);
    const [searchTerm, setSearchTerm] = useState(null);
    return (
        <ComponentWrapper>
            <AppLayout>
                <AppBar title="Jujubes">
                    <AppBar.Item placeLeft grow>
                        <BreadcrumbTrail />
                    </AppBar.Item>
                    <AppBar.Item placeRight>
                        <Button circle color="silent">
                            <Badge color="error" fill number place="corner">
                                5
                            </Badge>
                            <Icon name="shopping-cart" color="primary" size="medium" />
                        </Button>
                    </AppBar.Item>
                    <AppBar.Item placeRight>
                        <UserMenu
                            name={SAMPLE_USER.name}
                            about={SAMPLE_USER.email}
                            picture={SAMPLE_USER.pictureUrl}
                        >
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
                    logo={<LogoSymbol height={64} padding="18px 25px" />}
                    title={
                        <Text block size="large" weight="medium">
                            Example page
                        </Text>
                    }
                >
                    <AppNav.Menu>
                        <AppNav.MenuHeading>Main</AppNav.MenuHeading>
                        <AppNav.MenuItem icon="menu-squares" link="/">
                            Dashboard
                        </AppNav.MenuItem>
                        <AppNav.MenuItem icon="user" link="/profile">
                            Profile
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
                                <Badge number fill color="accent">
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
                    <Breadcrumb label="Forsiden" link="/" />
                    <Switch>
                        <Route path="/" component={Dashboard} />
                    </Switch>
                    <Redirect to="/details" />
                </AppContent>
            </AppLayout>
        </ComponentWrapper>
    );
};
