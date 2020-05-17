import React from "react"
import classNames from "classnames"
import styles from "./styles.scss"

import { Circle } from 'rc-progress'


export class ProgressCircle extends React.Component {

    render(){

        // Properties
        const { annotation, percent, value, color, size, children } = this.props;

        // Classes
        const baseClasses = classNames(styles.base, {
            [styles.successType]: color === "success",
            [styles.warningType]: color === "warning",
            [styles.errorType]: color === "error",
            [styles.sizeSmall]: size === "small",
            [styles.sizeLarge]: size === "large"
        });

        // Annotation
        let annotationSymbol = !value && !annotation ? "%" : annotation;

        // Stroke
        let strokeWidth;
        switch (size) {
            case "small":
                strokeWidth = 10;
                break;
            case "large":
                strokeWidth = 10;
                break;
            default:
                strokeWidth = 5;
        }


        return (
            <div className={baseClasses}>
                <div className={styles.content}>

                    {/* Circle */}
                    <Circle
                        className={styles.circle}
                        percent={percent}
                        strokeWidth={strokeWidth}
                        trailWidth={strokeWidth}
                        strokeLinecap="round"
                    />

                    <div className={styles.details}>
                        <div className={styles.wrapper}>

                            {/* Value */}
                            <div className={styles.value}>
                                {value || percent}

                                {annotationSymbol ? (
                                    <span className={styles.annotation}>{annotationSymbol}</span>
                                ) : null}
                            </div>

                            {/* Label */}
                            {children ? (
                                <div className={styles.label}>
                                    {children}
                                </div>
                            ) : null}
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
