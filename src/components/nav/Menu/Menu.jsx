import React from "react"
import classNames from "classnames"
import styles from "./styles.scss"

import { MenuItem } from "./MenuItem"

export class Menu extends React.Component {
    render(){

        const { children, onClick, hidden, className } = this.props;

        // Classes
        const classes = classNames(styles.base, {}, className);

        // Menu items
        const childrenWithProps = React.Children.map(children, (child, index) => {
            if(child.props.hidden){
                return null;
            }else if(child.type === MenuItem && onClick){
                return React.cloneElement(child, {
                    onClick: onClick
                })
            }else {
                return child;
            }
        });

        return !hidden ? (
            <nav className={classes}>
                {childrenWithProps}
            </nav>
        ) : null
    }
}
