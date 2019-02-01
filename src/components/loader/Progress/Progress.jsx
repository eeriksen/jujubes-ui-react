import React from "react"
import classNames from "classnames"
import styles from "./styles.scss"

import { Circle } from 'rc-progress';


export default class Progress extends React.Component {

    /**
     * RENDER:
     * @returns {XML}
     */
    render(){

        // Properties
        const { circle } = this.props;

        return circle ? this._renderCircle() : this._renderBar();
    }


    /**
     * RENDER:
     * Bar
     * @returns {XML}
     * @private
     */
    _renderBar(){

        // Properties
        const { percent, type, animation } = this.props;

        // Classes
        const progressLineClasses = classNames(styles.progressLine, {
            [styles.successType]: type === "success",
            [styles.errorType]: type === "error",
            [styles.animation]: animation
        });

        return (
            <div className={progressLineClasses}>
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


    _renderCircle(){

        // Properties
        const { percent, color, strokeWidth, trailWidth } = this.props;

        // Classes
        const classes = classNames(styles.progressCircle, {
            [styles.successType]: color === "success",
            [styles.errorType]: color === "error"
        });

        return (
            <div className={classes}>
                <Circle
                    className={styles.circle}
                    percent={percent}
                    strokeWidth={strokeWidth}
                    trailWidth={trailWidth}
                    strokeLinecap="round"
                />

                <div className={styles.details}>
                    <div className={styles.wrapper}>
                        <div className={styles.value}>
                            <svg width="100%" height="100%" viewBox="0 -450 1000 480">
                                <text x="50%" fontSize="600" fontWeight="600" fill="black" textAnchor="middle">{percent}</text>
                            </svg>
                        </div>
                        <div className={styles.percent}>
                            <svg width="100%" height="100%" viewBox="0 -450 1000 500">
                                <text x="100%" fontSize="200" fill="black" fontWeight="600" textAnchor="end">%</text>
                            </svg>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}


Progress.defaultProps = {
    strokeWidth: 4,
    trailWidth: 4,
    animation: true
};
