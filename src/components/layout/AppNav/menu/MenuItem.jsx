import React from "react"
import classNames from "classnames"
import styles from "./styles.scss"

import Clickable from "../../../button/Clickable"
import Icon from "../../../graphic/Icon"


export default class MenuItem extends React.Component {

    render(){

        // Properties
        const { icon, link, count, children } = this.props;

        // Classes
        const pathName = window.location.pathname;
        const itemClasses = classNames(styles.item, {
            [styles.selected]: link && pathName.startsWith(link)
        });

        return (
            <Clickable className={itemClasses} link={link}>

                {/* Icon */}
                {icon ? (
                    <div className={styles.icon}>
                        <Icon name={icon} />
                    </div>
                ) : null}

                {/* Label */}
                <div className={styles.label}>
                    {children}
                </div>

                {/* Indicators */}
                <div className={styles.indicators}>
                    {count ? (
                        <span className={styles.counter}>
                            {count}
                        </span>
                    ) : (
                        <Icon className={styles.arrow} name="chevron-right" />
                    )}
                </div>

            </Clickable>
        )
    }
}
