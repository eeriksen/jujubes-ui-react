import React from "react"
import styles from "./styles.scss"


export class Action extends React.Component {
    render(){
        return (
            <div className={styles.action}>
                {this.props.children}
            </div>
        )
    }
}
