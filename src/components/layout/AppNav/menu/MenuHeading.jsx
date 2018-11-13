import React from "react"
import styles from "./styles.scss"


export default class MenuHeading extends React.Component {
    render(){
        return (
            <span className={styles.heading}>
                {this.props.children}
            </span>
        )
    }
}
