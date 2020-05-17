import React from "react"
import styles from "./styles.scss"

export class Splash extends React.Component {
    render(){

        // Properties
        const { name, logo, footer } = this.props;

        return (
            <div className={styles.base}>

                {/* Center */}
                <div className={styles.center}>

                    {/* Header */}
                    <div className={styles.header}>

                        {logo ? (
                            <div className={styles.logo}>
                                {logo}
                            </div>
                        ) : null}

                        {name ? (
                            <div className={styles.name}>
                                {name}
                            </div>
                        ) : null}

                    </div>

                    {/* Box */}
                    <div className={styles.box}>
                        {this.props.children}
                    </div>
                </div>

                {/* Footer */}
                {footer ? (
                    <div className={styles.footer}>
                        {footer}
                    </div>
                ) : null}

            </div>
        )
    }
}
