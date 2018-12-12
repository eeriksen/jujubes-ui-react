import React from "react"
import styles from "./styles.scss"

export default class Option extends React.Component {
    render(){
        return (
            <option value={this.props.value} className={styles.option}>
                {this.props.children}
            </option>
        )
    }
}
