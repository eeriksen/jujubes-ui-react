import React from "react"
import styles from "./Page.scss"


export default class Page extends React.Component {
    render(){
        return (
            <div className={styles.base}>
                {this.props.children}
            </div>
        )
    }
}
