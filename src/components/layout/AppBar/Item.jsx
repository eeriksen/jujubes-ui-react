import React from "react"
import styles from "./styles.scss"


import Clickable from "../../button/Clickable"

export default class extends React.Component {
    render(){
        return (
            <Clickable {...this.props} className={styles.item}>
                <div className={styles.wrapper}>
                    {this.props.children}
                </div>
            </Clickable>
        )
    }
}
