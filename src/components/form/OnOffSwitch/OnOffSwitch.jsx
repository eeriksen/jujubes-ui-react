import React from "react"
import classNames from "classnames"
import styles from "./styles.scss"

import Icon from "../../graphic/Icon"


export default class OnOffSwitch extends React.Component {

    _toggleSwitch = () => {

        // Check if disabled
        if(this.props.disabled){
            return false;
        }

        // Callback
        if(this.props.onChange){
            this.props.onChange(this.props.value);
        }
    };

    render(){

        // Properties
        const { value, disabled, children, cyp } = this.props;

        const classes = classNames(styles.base, {
            [styles.isOff]: !value,
            [styles.disabled]: disabled,
            [styles.noLabel]: !children
        });

        return (
            <div className={classes} onClick={this._toggleSwitch} data-cyp={cyp}>
                <div className={styles.switch}>
                    <div className={styles.handle} />
                    <Icon className={styles.onIcon} name="check" small />
                    <Icon className={styles.offIcon} name="close" small />
                </div>

                {/* Label */}
                {this.props.children ? (
                    <div className={styles.label}>
                        {this.props.children}
                    </div>
                ) : null}

            </div>
        )
    }
}
