import React, {useState} from "react"
import styles from "./PageActions.scss"
import classNames from "classnames"

import { Clickable } from "../../button/Clickable"
import { Icon } from "../../graphic/Icon"
import { Menu, MenuItem } from "../../navigation/Menu"
import { PopOver } from "../../navigation/PopOver"


export const PageActions = ({children}) => {
    const [visible, setVisible] = useState(false);

    /**
     * Action click
     * @param e
     */
    const handleActionClick = (e) => {
        setVisible(!visible);
    };


    // Button classes
    const buttonClasses = classNames(styles.button, {
        [styles.active]: visible
    });

    return (
        <div className={styles.base}>
            <PopOver visible={visible}
                     content={renderMenu(children)}
                     onClose={() => setVisible(false)}>
                <Clickable className={buttonClasses} onClick={handleActionClick}>
                    <Icon name="lightning" />
                </Clickable>
            </PopOver>
        </div>
    )
}

const renderMenu = (items) => {
    return (
        <div className={styles.menu}>
            <Menu>
                {items && React.Children.map(items, (child, index) => (
                    <MenuItem
                        key={index}
                        icon={child.props.icon}
                        label={child.props.children}
                        {...child.props}
                    />
                ))}
            </Menu>
        </div>
    )
}
