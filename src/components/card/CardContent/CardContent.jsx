import React from "react"
import styles from "./styles.scss"


export default class CardContent extends React.Component {
    render(){
        return (
            <div className={styles.base}>
                {this.props.children}
            </div>
        )
    }
}
