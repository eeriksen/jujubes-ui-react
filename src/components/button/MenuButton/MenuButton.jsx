import React from "react"
import styles from "./styles.scss"

import { Clickable } from "../Clickable"

export class MenuButton extends React.Component {
    render(){
        return (
            <Clickable {...this.props} className={styles.base}>
                <div className={styles.wrapper}>
                    <span />
                    <span />
                    <span />
                </div>
            </Clickable>
        )
    }
}
