import React from "react"
import styles from "./styles.scss"


export class SplashContent extends React.Component {
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
