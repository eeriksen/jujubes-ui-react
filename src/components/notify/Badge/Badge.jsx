import React from "react"
import classNames from "classnames"
import style from "./style.scss"


export default class Badge extends React.Component {
    render(){

        const { fill, small, leftSpacing, rightSpacing, color } = this.props;

        const classes = classNames(style.base, {
            [style.primary]: color === "primary",
            [style.silent]: color === "silent",
            [style.info]: color === "info",
            [style.success]: color === "success",
            [style.warning]: color === "warning",
            [style.error]: color === "error",
            [style.contrast]: color === "contrast",

            [style.small]: small,

            [style.leftSpacing]: leftSpacing,
            [style.rightSpacing]: rightSpacing,

            [style.fill]: fill
        });

        return (
            <span className={classes}>
                {this.props.children}
            </span>
        )
    }
}
