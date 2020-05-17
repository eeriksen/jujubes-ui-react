import React from "react"
import styles from "./styles.scss"


export class SectionTitle extends React.Component {
    render(){
        return (
            <div className={styles.title}>
                {this.props.children}
            </div>
        )
    }
}
