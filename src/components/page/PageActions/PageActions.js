import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import styles from "./PageActions.scss";
import classNames from "classnames";

import { AppContext } from "../../layout/AppContext";
import { Clickable } from "../../button/Clickable";
import { Icon } from "../../graphic/Icon";
import { Menu, MenuItem } from "../../navigation/Menu";
import { PopOver } from "../../navigation/PopOver";
import { Action } from "./Action";
import { ContentWrapper } from "../../layout/ContentWrapper";
import { Card, CardContent, CardTitle } from "../../card";
import { Row, Col } from "../../grid";
import { Popup, PopupTitle, PopupContent } from "../../notify/Popup";

export const PageActions = ({ title, children, extended }) => {
    return (
        <React.Fragment>
            <ContentWrapper widescreen="down">
                {renderMobileContent({ title, children })}
            </ContentWrapper>
            <ContentWrapper widescreen="only">
                {renderDesktopContent({ title, children })}
            </ContentWrapper>
        </React.Fragment>
    );
};

const renderDesktopContent = ({ title, children }) => {
    let actions = [];
    let content = [];

    React.Children.map(children, (child, index) => {
        if (child) {
            if (child.props.children) {
                content.push(child);
            } else {
                actions.push(child);
            }
        }
    });

    return (
        <Row>
            <Col span={24}>
                <Card type="highlight">
                    <CardTitle title={title}>
                        <Icon name="lightning" color="primary" size="medium" />
                    </CardTitle>
                    <CardContent>
                        <Menu>
                            {actions.map((action, index) => (
                                <MenuItem
                                    key={index}
                                    icon={action.props.icon}
                                    label={action.props.label}
                                    {...action.props}
                                />
                            ))}
                        </Menu>
                    </CardContent>
                </Card>
            </Col>
            {content.map((content, index) => (
                <Col key={index} span={24}>
                    <Card type="highlight">
                        <CardTitle title={content.props.label}>
                            {content.props.icon ? (
                                <Icon name={content.props.icon} color="primary" size="medium" />
                            ) : null}
                        </CardTitle>
                        <CardContent>{content.props.children}</CardContent>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

const renderMobileContent = ({ title, children }) => {
    const { pageInfo } = useContext(AppContext);
    const [visible, setVisible] = useState(false);
    const [activeItem, setActiveItem] = useState(null);
    return (
        <React.Fragment>
            <div
                className={classNames(styles.base, {
                    [styles.evadeButtons]: pageInfo.hasPageNav
                })}
            >
                <PopOver
                    padding="regular"
                    visible={visible}
                    content={renderMenuItems(children, setActiveItem, () => setVisible(false))}
                    onClose={() => setVisible(false)}
                >
                    <Clickable
                        className={classNames(styles.button, {
                            [styles.active]: visible
                        })}
                        onClick={() => setVisible(!visible)}
                    >
                        <div className={styles.label}>{title}</div>
                        <div className={styles.symbol}>
                            <Icon className={styles.icon} name="lightning" />
                        </div>
                    </Clickable>
                </PopOver>
            </div>
            {activeItem ? (
                <Popup onClose={() => setActiveItem(null)}>
                    <PopupTitle>
                        {activeItem.props.icon ? (
                            <Row gutter={["small", "small"]}>
                                <Col align={["center", "center"]}>
                                    <Icon
                                        name={activeItem.props.icon}
                                        color="primary"
                                        size="large"
                                    />
                                </Col>
                                <Col grow>{activeItem.props.label}</Col>
                            </Row>
                        ) : null}
                    </PopupTitle>
                    <PopupContent>{activeItem.props.children}</PopupContent>
                </Popup>
            ) : null}
        </React.Fragment>
    );
};

const renderMenuItems = (items, setActiveItem, onClose) => {
    const handleItemClick = (child) => {
        onClose();
        if (React.Children.count(child.props.children) && !child.props.onClick) {
            setActiveItem(child);
        } else if (child.props.onClick) {
            child.props.onClick();
        }
    };

    return (
        <div className={styles.menu}>
            <Menu>
                {items &&
                    React.Children.map(items, (child, index) => (
                        <MenuItem
                            {...child.props}
                            key={index}
                            icon={child.props.icon}
                            label={child.props.label}
                            onClick={() => handleItemClick(child)}
                        />
                    ))}
            </Menu>
        </div>
    );
};

PageActions.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(Action), PropTypes.objectOf(Action)])
};
