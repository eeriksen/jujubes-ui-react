import React from "react"
import classNames from "classnames"
import styles from "./styles.scss"

export default class Text extends React.Component {
    render(){

        // Properties
        const { block, truncate, color, weight, size, opacity,
            strikeThrough, lowercase, underline, italic, children } = this.props;

        // Classes
        const classes = classNames(styles.base, {
            [styles.block]: block,
            [styles.truncate]: truncate,

            [styles.weightMedium]: weight === "medium",
            [styles.weightBold]: weight === "bold",

            [styles.sizeSmall]: size === "small",
            [styles.sizeNormal]: size === "normal",
            [styles.sizeMedium]: size === "medium",
            [styles.sizeLarge]: size === "large",
            [styles.sizeXlarge]: size === "xlarge",

            [styles.base]: color === "base",
            [styles.base80]: color === "base80",
            [styles.base60]: color === "base60",
            [styles.base40]: color === "base40",

            [styles.primary]: color === "primary",
            [styles.contrast]: color === "contrast",
            [styles.success]: color === "success",
            [styles.warning]: color === "warning",
            [styles.error]: color === "error",
            [styles.info]: color === "info",

            [styles.strikeThrough]: strikeThrough,
            [styles.lowercase]: lowercase,
            [styles.underline]: underline,
            [styles.italic]: italic
        }, this.props.className);

        return (
            <span className={classes} style={opacity ? {opacity: opacity} : null}>
                {children}
            </span>
        )
    }
}
