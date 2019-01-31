import React from "react"
import classNames from "classnames"
import styles from "./styles.scss"


export default class PopupTitle extends React.Component {
    render(){

        // Properties
        const { subtitle, align } = this.props;

        // Classes
        const classes = classNames(styles.title, {
            [styles.alignCenter]: align === "center"
        });

        return (
            <div className={classes}>
                <div className={styles.text}>
                    {this.props.children}
                </div>

                {subtitle ? (
                    <div className={styles.subtitle}>
                        {subtitle}
                    </div>
                ) : null}
            </div>
        )
    }
}
