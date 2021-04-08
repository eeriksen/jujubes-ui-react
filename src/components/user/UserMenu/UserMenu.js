import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./UserMenu.scss";

import { Clickable } from "../../button/Clickable";
import { CardUserHead } from "../../card/CardUserHead";
import { PopOver } from "../../navigation/PopOver";
import { Icon } from "../../graphic/Icon";

export const UserMenu = ({ picture, about, name, children }) => {
    const [visible, setVisible] = useState(false);
    return (
        <div
            className={classNames(styles.base, {
                [styles.visible]: visible,
                [styles.hasPicture]: picture
            })}
        >
            <PopOver
                visible={visible}
                content={menuContent({ picture, about, name, children })}
                size="large"
                onClose={() => setVisible(false)}
            >
                <Clickable block className={styles.picture} onClick={() => setVisible(!visible)}>
                    {picture ? <img alt={name} src={picture} /> : null}
                    <div className={styles.symbol}>
                        <Icon name={visible ? "arrow-down" : "user"} />
                    </div>
                </Clickable>
            </PopOver>
        </div>
    );
};

const menuContent = ({ picture, about, name, children }) => {
    return (
        <React.Fragment>
            <CardUserHead picture={picture} name={name} about={about} />
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
     * Users email and/or jobtitle
     */
    about: PropTypes.any,
    /**
     * Users full name
     */
    name: PropTypes.string,
    /**
     * Content of user menu. Usually a Menu.
     */
    children: PropTypes.any
};
