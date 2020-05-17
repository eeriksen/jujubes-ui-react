import React from "react"
import styles from "./styles.scss"



export class MenuHeading extends React.Component {
    render(){
        return (
            <span className={styles.heading}>
                {this.props.label}
            </span>
        )
    }
}
