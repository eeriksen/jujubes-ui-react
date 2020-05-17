import React from "react"
import classNames from "classnames"
import styles from "./styles.scss"


export class Badge extends React.Component {
    render(){

        const { fill, small, leftSpacing, rightSpacing, color, number } = this.props;

        const classes = classNames(styles.base, {
            [styles.primary]: color === "primary",
            [styles.silent]: color === "silent",
            [styles.info]: color === "info",
            [styles.success]: color === "success",
            [styles.warning]: color === "warning",
            [styles.error]: color === "error",
            [styles.contrast]: color === "contrast",

            [styles.small]: small,

            [styles.leftSpacing]: leftSpacing,
            [styles.rightSpacing]: rightSpacing,

            [styles.fill]: fill,
            [styles.number]: number
        });

        return (
            <span className={classes}>
                {this.props.children}
            </span>
        )
    }
}
