import React from "react"
import classNames from "classnames"
import styles from "./styles.scss"

import Button from "../Button"


export default class ButtonGroup extends React.Component {
    render(){

        // Properties
        const { children, className } = this.props;

        // Button elements
        const buttons = React.Children.map(children, (child) => {
            if(child && child.type === Button){
                return React.cloneElement(child, {
                    className: styles.item
                });
            }
        });

        // Base classes
        const baseClasses = classNames(styles.base, className);

        return (
            <div className={baseClasses}>
                {buttons}
            </div>
        )
    }
}
