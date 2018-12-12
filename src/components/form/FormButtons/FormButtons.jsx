import React from "react"
import styles from "./styles.scss"

import FormItem from "../FormItem"
import SubmitButton from "../../button/SubmitButton"
import Button from "../../button/Button"
import FileSelectButton from "../../button/FileSelectButton"


export default class FormButtons extends React.Component {
    render(){

        // Only keep buttons
        const buttons = React.Children.map(this.props.children, (child) => {
            if(child.type === SubmitButton || child.type === Button || child.type === FileSelectButton){
                return React.cloneElement(child, {
                    className: styles.button
                });
            }
        });

        return (
            <FormItem>
                <div className={styles.base}>
                    {buttons}
                </div>
            </FormItem>
        )
    }
}
