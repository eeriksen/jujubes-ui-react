import React from "react"
import classNames from "classnames"
import styles from "./styles.scss"


export class Paragraph extends React.Component {
    render(){

        // Properties
        const { align, noMargin } = this.props;

        // Classes
        const classes = classNames(styles.base, {
            [styles.centerAlign]: align === "center",
            [styles.noMargin]: noMargin
        });

        return (
            <p className={classes}>
                {this.props.children}
            </p>
        )
    }
}
