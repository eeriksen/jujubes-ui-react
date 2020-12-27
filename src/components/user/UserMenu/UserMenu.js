import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./styles.scss";

import { Clickable } from "../../button/Clickable";
import { CardUserHead } from "../../card/CardUserHead";
import { PopOver } from "../../navigation/PopOver";
import { Icon } from "../../graphic/Icon";

export const UserMenu = ({ picture, email, name, children }) => {
    const [visible, setVisible] = useState(false);
    return (
        <div
            className={classNames(styles.base, {
                [styles.visible]: visible
            })}
        >
            <PopOver
                visible={visible}
                content={menuContent({ picture, email, name, children })}
                arrowColor="primary"
                size="large"
                onClose={() => setVisible(false)}
            >
                <Clickable block className={styles.picture} onClick={() => setVisible(!visible)}>
                    {picture ? (
                        <img alt={name} src={picture} />
                    ) : (
                        <div className={styles.placeholder}>
                            <Icon name="user" />
                        </div>
                    )}
                </Clickable>
            </PopOver>
        </div>
    );
};

const menuContent = ({ picture, email, name, children }) => {
    return (
        <React.Fragment>
            <CardUserHead picture={picture} name={name} email={email} />
            <div className={styles.frame}>{children}</div>
        </React.Fragment>
    );
};

UserMenu.propTypes = {
    /**
     * Picture of user
     */
    picture: PropTypes.string,
    /**
     * Users email
     */
    email: PropTypes.string,
    /**
     * Users full name
     */
    name: PropTypes.string,
    /**
     * Content of user menu. Usually a Menu.
     */
    children: PropTypes.any
};
