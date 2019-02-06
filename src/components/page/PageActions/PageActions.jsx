import React from "react"
import styles from "./styles.scss"
import classNames from "classnames"

import Clickable from "../../button/Clickable"
import Icon from "../../graphic/Icon"
import { Menu, MenuItem } from "../../nav/Menu"
import PopOver from "../../nav/PopOver"

export default class PageActions extends React.Component {

    state = {
        visible: false
    };


    _handleActionClick = (e) => {
        e.stopPropagation();
        const { visible } = this.state;
        this.setState({visible: !visible});
    };


    render(){

        // Properties
        const { children } = this.props;

        // Variables
        const { visible } = this.state;

        // Button classes
        const buttonClasses = classNames(styles.button, {
            [styles.active]: visible
        });

        return (
            <div className={styles.base}>

                {/* Action button */}
                <Clickable className={buttonClasses} onClick={this._handleActionClick}>
                    <Icon name="lightning" />
                </Clickable>

                {/* Action menu */}
                <PopOver visible={visible} onClose={() => this.setState({visible: false})}>
                    <Menu>
                        {children && React.Children.map(children, (child, index) => (
                            <MenuItem
                                key={index}
                                icon={child.props.icon}
                                label={child.props.children}
                                {...child.props}
                            />
                        ))}
                    </Menu>
                </PopOver>

            </div>

        )
    }
}
