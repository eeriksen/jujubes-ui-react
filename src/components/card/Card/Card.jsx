import React from "react"
import classNames from "classnames"
import styles from "./styles.scss"


export class Card extends React.Component {
    render(){

        // Properties
        const { className, children } = this.props;

        return (
            <div className={classNames(styles.base, className)}>
                {children}
            </div>
        )
    }
}
