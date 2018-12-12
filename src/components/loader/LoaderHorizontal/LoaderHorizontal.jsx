import React from "react"
import styles from "./styles.scss"


export default class LoaderHorizontal extends React.Component {
    render(){
        return (
            <div className={styles.base}>
                <div className={styles.bar} />
            </div>
        )
    }
}
