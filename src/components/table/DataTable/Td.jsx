import React from "react"
import classNames from "classnames"
import styles from "./styles.scss"


export default class Td extends React.Component {
    render(){

        // Properties
        const { colSpan, onClick, children, noBorderBottom, noBorderRight } = this.props;

        // Column classes
        const colClasses = classNames(styles.col, {
            [styles.noBorderBottom]: noBorderBottom,
            [styles.noBorderRight]: noBorderRight
        });

        return (
            <td
                className={colClasses}
                colSpan={colSpan}
                onClick={() => onClick ? onClick() : null}>

                {children}
            </td>
        )
    }
}
