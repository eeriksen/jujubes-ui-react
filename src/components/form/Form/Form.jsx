import React from "react"
import classNames from "classnames"
import styles from "./styles.scss"
import { FormItem } from "../FormItem"

export class Form extends React.Component {


    /**
     * Handle form submit
     * @private
     */
    _handleFormSubmit = (event) => {
        event.preventDefault();

        if(this.props.onSubmit){
            this.props.onSubmit(event);
        }
    };


    /**
     * RENDER
     * @returns {XML}
     */
    render(){

        // Properties
        const { children, spacing, className } = this.props;

        const childrenWithProps = React.Children.map(children, (child) => {

            // Check if child is null
            if(!child){
                return null;
            }

            // Child properties
            let props = {};

            // Check if form item
            if(child.type === FormItem){
                props.spacing = spacing;
            }

            return React.cloneElement(child, props);
        });

        // Base classes
        const baseClasses = classNames(styles.base, className);

        return (
            <form className={baseClasses} onSubmit={this._handleFormSubmit}>
                {childrenWithProps}
            </form>
        )
    }

}
