import React from "react"
import styles from "./styles.scss"


export default class CardTitle extends React.Component {
    render(){

        // Properties
        const { title, children } = this.props;

        return (
            <div className={styles.base}>
                <div className={styles.title}>
                    {title}
                </div>
                {children ? (
                    <div className={styles.addons}>
                        <div className={styles.wrapper}>
                            {children}
                        </div>
                    </div>
                ) : null}
            </div>
        )
    }
}
