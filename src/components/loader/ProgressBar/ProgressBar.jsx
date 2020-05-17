import React from "react"
import classNames from "classnames"
import styles from "./styles.scss"

export class ProgressBar extends React.Component {

    render(){

        // Properties
        const { percent, type, animation } = this.props;

        // Classes
        const baseClasses = classNames(styles.base, {
            [styles.successType]: type === "success",
            [styles.errorType]: type === "error",
            [styles.animation]: animation
        });

        return (
            <div className={baseClasses}>
                <div className={styles.bar}>
                    <div className={styles.info}>
                        <div className={styles.label}>
                            {this.props.children}
                        </div>
                        <div className={styles.percent}>
                            {percent}%
                        </div>
                    </div>
                    <div className={styles.trail}>
                        <div style={{width: percent+"%"}} className={styles.indicator}>
                            <div className={styles.stripes} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

ProgressBar.defaultProps = {
    animation: true
};
