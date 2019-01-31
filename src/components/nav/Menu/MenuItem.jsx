import React from "react"
import classNames from "classnames"
import styles from "./styles.scss"

import Clickable from "../../button/Clickable"
import Icon from "../../graphic/Icon"


export default class MenuItem extends React.Component {

    onClick = (e) => {
        e.stopPropagation();

        if(this.props.onClick){
            this.props.onClick();
        }
    };


    render(){

        // Properties
        const { label, icon, link, selected, count, indicator, cyp } = this.props;

        // Classes
        const classes = classNames(styles.item, {
            [styles.selected]: selected
        });

        return (
            <Clickable className={classes}
                       activeClassName={styles.selected}
                       onClick={this.onClick}
                       link={link}
                       cyp={cyp}
            >

                {/* Icon */}
                {icon ? (
                    <span className={styles.icon}>
                        <Icon name={icon} />
                    </span>
                ) : null}

                {/* Label */}
                <span className={styles.label}>
                    {label}
                </span>

                {/* Indicator */}
                {indicator ? (
                    <span className={styles.indicator}>
                        {indicator}
                    </span>
                ) : null}

                {/* Counter */}
                {count ? (
                    <span className={styles.counter}>
                        <div className={styles.counterIndicator}>
                            {count}
                        </div>
                    </span>
                ) : null}

            </Clickable>
        )
    }
}
