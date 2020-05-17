import React from "react"
import classNames from "classnames"
import styles from "./styles.scss"


export class Code extends React.Component {
    render(){

        // Properties
        const { inverted, block } = this.props;

        const classes = classNames(styles.base, {
            [styles.block]: block,
            [styles.inverted]: inverted
        });

        return (
            <code className={classes}>
                {this.props.children}
            </code>
        )
    }
}
