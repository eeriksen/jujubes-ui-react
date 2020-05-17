import React from "react"
import classNames from "classnames"
import styles from "./styles.scss"

import { Icon } from "../../graphic/Icon"


export class Checkbox extends React.Component {

    state = {
        uniqueId: `cb-${Math.round(Math.random() * 100000)}`
    };

    _toggleChecked = (e) => {
        e.stopPropagation();
        if(this.props.onToggle){
            this.props.onToggle(this.props.checked);
        }
    };

    render(){

        // Properties
        const { noMargin, checked, className, children, embedded } = this.props;

        // Variables
        const { uniqueId } = this.state;

        // Base class
        const baseClasses = classNames(styles.base, {
            [styles.isChecked]: checked,
            [styles.noMargin]: noMargin,
            [styles.embedded]: embedded
        }, className);

        return (
            <div className={baseClasses}>
                <input id={uniqueId} type="checkbox" checked={checked} onChange={this._toggleChecked}/>
                <label htmlFor={uniqueId}>
                    <div className={styles.check}>
                        <Icon name="check" className={styles.icon} />
                    </div>

                    {/* Label */}
                    {children ? (
                        <div className={styles.label}>
                            {children}
                        </div>
                    ) : null}
                </label>
            </div>
        )
    }
}
