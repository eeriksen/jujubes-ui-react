import React from "react"
import classNames from "classnames"
import styles from "./styles.scss"

import { Icon } from "../../graphic/Icon"

export class Select extends React.Component {

    _handleOnChange = (e) => {
        if(this.props.onChange){
            this.props.onChange(e.target.value);
        }
    };

    render(){

        // Properties
        const { small, big, error, className, selectClassName, children, placeholder, disabled } = this.props;

        // Value
        const value = this.props.value  || '';

        // Select classes
        const baseClasses = classNames(styles.base, {
            [styles.placeholder]: value === '',
            [styles.error]: error,
            [styles.small]: small,
            [styles.big]: big,
            [styles.disabled]: disabled
        }, className);

        // Select classes
        const selectClasses = classNames(styles.select, selectClassName);

        return (
            <div className={baseClasses}>
                <div className={styles.arrow}>
                    <Icon className={styles.icon} name="caret-down" />
                </div>
                <select value={value} onChange={this._handleOnChange} className={selectClasses} disabled={disabled}>
                    {!this.props.value ? (
                        <option>{placeholder}</option>
                    ) : null}
                    {children}
                </select>
            </div>
        )
    }
}
