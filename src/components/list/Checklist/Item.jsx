import React from "react"
import classNames from "classnames"
import styles from "./styles.scss"

import Checkbox from "../../form/Checkbox"

export default class Item extends React.Component {


    _handleOnChange = () => {
        if(this.props.onChange){
            this.props.onChange(this.props.value);
        }
    };

    render(){

        // Checked
        const { checked } = this.props;

        // Classes
        const classes = classNames(styles.item, {
            [styles.checked]: checked
        });

        return (
            <div className={classes} onClick={this._handleOnChange}>
                <Checkbox className={styles.checkbox} checked={checked} onToggle={this._handleOnChange}>
                    {this.props.children}
                </Checkbox>
            </div>
        )
    }
}
