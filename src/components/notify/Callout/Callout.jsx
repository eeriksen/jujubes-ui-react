import React from "react"
import classNames from "classnames"
import styles from "./styles.scss"



export default class Callout extends React.Component {

    render(){

        const { type, title, children, className } = this.props;

        const classes = classNames(styles.base, {

            [styles.info]: type === "info",
            [styles.success]: type === "success",
            [styles.warning]: type === "warning",
            [styles.error]: type === "error"

        }, className);

        return (
            <div className={classes}>

                {/* Title */}
                {title ? (
                    <div className={styles.title}>
                        {title}
                    </div>
                ) : null}

                {/* Message */}
                <div className={styles.message}>
                    {children}
                </div>

            </div>
        )
    }
}
