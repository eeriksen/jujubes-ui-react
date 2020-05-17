import React from "react"
import classNames from "classnames"
import styles from "./styles.scss"


export class Tr extends React.Component {
    render(){

        // Properties
        const { blink, expand, onClick, unclickable } = this.props;

        // Row classes
        const rowClasses = classNames(styles.row, {
            [styles.blink]: blink,
            [styles.expand]: expand,
            [styles.unclickable]: unclickable
        });

        return (
            <tr className={rowClasses} onClick={() => onClick ? onClick() : null}>
                {this.props.children}
            </tr>
        )
    }
}
