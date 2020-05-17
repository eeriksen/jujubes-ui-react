import React from "react"
import classNames from "classnames"
import styles from "./styles.scss"


export class Textarea extends React.Component {

    /**
     * When input changes
     * @param e
     * @private
     */
    _onChange = (e) => {

        // Check id exceeding max length
        if(this.props.maxLength && e.target.value.length > this.props.maxLength){
            e.target.value = e.target.value.slice(0, this.props.maxLength);
        }

        // Set number of characters
        this.setState({
            characters: e.target.value.length
        });

        // Callback
        if(this.props.onChange){
            this.props.onChange(e);
        }
    };



    render(){

        // Properties
        const { placeholder, error, className, disabled, maxLength, rows, value } = this.props;

        // Classes
        const classes = classNames(styles.base, {
            [styles.error]: error
        }, className);

        return (
            <textarea className={classes}
                      placeholder={placeholder}
                      disabled={disabled}
                      maxLength={maxLength}
                      rows={rows}
                      value={value || ''}
                      onChange={(e) => this._onChange(e)}>
            </textarea>
        )
    }
}


Textarea.defaultProps = {
    maxLength: 2000,
    rows: 3
};
