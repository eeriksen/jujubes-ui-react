import React from "react"
import styles from "./styles.scss"


export default class Item extends React.Component {
    render(){

        const { label } = this.props;

        return (
            <tr className={styles.row}>
                <td className={styles.key}>
                    {label}
                </td>
                <td className={styles.value}>
                    {this.props.children}
                </td>
            </tr>
        )
    }
}
