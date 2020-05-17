import React from "react"
import classNames from "classnames"
import styles from "./styles.scss"


export class Section extends React.Component {
    render(){

        // Properties
        const { spacing, align } = this.props;

        // Classes
        const classes = classNames(styles.base, {
            [styles.spacingNone]: spacing === "none",
            [styles.spacingSmall]: spacing === "small",
            [styles.spacingMedium]: spacing === "medium",
            [styles.spacingLarge]: spacing === "large",

            [styles.alignCenter]: align === "center"
        }, this.props.className);

        return (
            <section className={classes}>
                {this.props.children}
            </section>
        )
    }
}
