import React from "react"
import styles from "./styles.scss"


export default class extends React.Component {
    render(){

        // Properties
        const { children } = this.props;

        return (
            <div className={styles.content}>
                {children}
            </div>
        )
    }
}
