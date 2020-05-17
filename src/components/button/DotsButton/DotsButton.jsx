import React from "react"
import classNames from "classnames"
import styles from "./styles.scss"

import { Clickable } from "../Clickable"
import { Icon } from "../../graphic/Icon"

export class DotsButton extends React.Component {
    render(){

        // Properties
        const { active, onClick } = this.props;

        // Classes
        const classes = classNames(styles.base, {
            [styles.active]: active
        });

        return (
            <Clickable className={classes} onClick={onClick}>
                <Icon className={styles.icon} name="menu-dots" />
            </Clickable>
        )
    }
}
