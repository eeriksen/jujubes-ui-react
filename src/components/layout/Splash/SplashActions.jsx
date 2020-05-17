import React from "react"
import styles from "./styles.scss"


export class SplashActions extends React.Component {
    render(){

        // Properties
        const { children } = this.props;

        return (
            <div className={styles.actions}>
                {children}
            </div>
        )
    }
}

