import React from "react"
import classNames from "classnames"
import styles from "./styles.scss"

import { FormItem } from "../FormItem"

export class FormError extends React.Component {
    render(){

        // Properties
        const { visible } = this.props;

        // Visible
        if(!visible){
            return null;
        }

        const classes = classNames(styles.base);

        return (
            <FormItem className={classes}>
                <div className={styles.error}>
                    {this.props.children}
                </div>
            </FormItem>
        )
    }
}
