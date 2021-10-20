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

export const PageActions = ({ children }) => {
    const { pageInfo } = useContext(AppContext);
    const [visible, setVisible] = useState(false);

    const handleActionClick = (e) => {
        setVisible(!visible);
    };

    return (
        <div
            className={classNames(styles.base, {
                [styles.evadeButtons]: pageInfo.hasNav
            })}
        >
            <PopOver
                visible={visible}
                content={renderMenu(children)}
                onClose={() => setVisible(false)}
            >
                <Clickable
                    className={classNames(styles.button, {
                        [styles.active]: visible
                    })}
                    onClick={handleActionClick}
                >
                    <Icon name="lightning" />
                </Clickable>
            </PopOver>
        </div>
    );
};

const renderMenu = (items) => {
    return (
        <div className={styles.menu}>
            <Menu>
                {items &&
                    React.Children.map(items, (child, index) => (
                        <MenuItem
                            key={index}
                            icon={child.props.icon}
                            label={child.props.children}
                            {...child.props}
                        />
                    ))}
            </Menu>
        </div>
    );
};

PageActions.propTypes = {
    children: PropTypes.arrayOf(Action)
};
