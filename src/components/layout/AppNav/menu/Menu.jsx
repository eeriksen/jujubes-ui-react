import React from "react"
import classNames from "classnames"
import styles from "./styles.scss"


export class Menu extends React.Component {
    render(){

        const { children, className } = this.props;

        // Classes
        const classes = classNames(styles.base, className);

        return (
            <nav className={classes}>
                {children}
            </nav>
        )
    }
}
