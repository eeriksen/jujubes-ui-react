import React from "react"
import classNames from "classnames"
import styles from "./styles.scss"


export default class Spinner extends React.Component {
    render(){

        // Properties
        const { large, className } = this.props;

        // Classes
        const classes = classNames(styles.base, {
            [styles.large]: large
        }, className);

        return (
            <div className={classes}>
                <svg className={styles.circular} viewBox="25 25 50 50">
                    <circle className={styles.path} cx="50" cy="50" r="20" fill="none"/>
                </svg>
            </div>
        )
    }
}
