import React from "react"
import PropTypes from "prop-types"


import classNames from "classnames"
import styles from "./styles.scss"

import Icon from "../../graphic/Icon"
import Clickable from "../../button/Clickable"


class Input extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            characters: 0
        };
    }


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


    /**
     * Handle prepend click
     * @private
     */
    _handlePrependClick = () => {
        if(this.props.onPrependClick){
            this.props.onPrependClick();
        }
    };


    /**
     * Handle append click
     * @private
     */
    _handleAppendClick = () => {
        if(this.props.onAppendClick){
            this.props.onAppendClick();
        }
    };


    /**
     * Handle key press
     * @private
     */
    _handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            if(this.props.onEnter){
                this.props.onEnter(e);
            }
        }
    };



    render(){

        const { small, big, error, icon, prepend, append, className } = this.props;

        // Classes
        const classes = classNames(styles.base, {
            [styles.small]: small,
            [styles.big]: big,
            [styles.error]: error,

            [styles.inputIcon]: icon,
            [styles.inputPrepend]: prepend,
            [styles.inputAppend]: append

        }, className);


        return (
            <div className={classes}>
                {this._renderIcon()}
                {this._renderPrepend()}
                {this._renderInput()}
                {this._renderAppend()}
                {this._renderCounter()}
            </div>
        );
    }


    /**
     * RENDER
     * Input
     * @private
     */
    _renderInput(){

        // Properties
        const { placeholder, inputClassName, disabled, maxLength, max, min,
            step, value, type, onClick, onFocus, onBlur, cyp } = this.props;

        // Input classes
        const inputClasses = classNames(styles.input, inputClassName);

        return (
            <input  type={type}
                    className={inputClasses}
                    placeholder={placeholder}
                    disabled={disabled}
                    ref={(input) => { this.nameInput = input; }}
                    maxLength={maxLength}
                    max={max}
                    min={min}
                    step={step}
                    value={typeof value !== 'undefined' && value !== null ? value : ''}
                    onChange={(e) => this._onChange(e)}
                    onClick={(e) => onClick && onClick(e)}
                    onKeyPress={this._handleKeyPress}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    data-cyp={cyp}
            />
        )
    }


    /**
     * RENDER:
     * Icon
     * @private
     */
    _renderIcon(){
        if(this.props.icon){
            return <Icon name={this.props.icon} className={styles.icon} small={!this.props.big} />;
        }else {
            return null;
        }
    }


    /**
     * RENDER:
     * Prepended content
     * @returns {*}
     * @private
     */
    _renderPrepend(){

        const { prepend, onPrependClick, disabled } = this.props;
        const prependClasses = classNames(styles.prepend, {
            [styles.clickable]: !disabled && onPrependClick,
            [styles.disabled]: disabled
        });

        if(prepend){
            return (
                <Clickable className={prependClasses} onClick={(e) => !disabled ? this._handlePrependClick(e) : null}>
                    <div className={styles.content}>
                        {prepend}
                    </div>
                </Clickable>
            )
        }else {
            return null;
        }
    }


    /**
     * RENDER:
     * Append content
     * @returns {*}
     * @private
     */
    _renderAppend(){

        const { append, onAppendClick } = this.props;
        const appendClasses = classNames(styles.append, {
            [styles.clickable]: onAppendClick
        });

        if(append){
            return (
                <Clickable className={appendClasses} onClick={this._handleAppendClick}>
                    <div className={styles.content}>
                        {append}
                    </div>
                </Clickable>
            )
        }else {
            return null;
        }
    }


    /**
     * RENDER:
     * Character counter
     * @private
     */
    _renderCounter(){
        if(this.props.counter){
            return (
                <div className={styles.counter}>
                    {this.state.characters}
                </div>
            )
        }else {
            return null;
        }
    }
}





Input.propTypes = {
    big:                    PropTypes.bool,               // Render big input
    placeholder:            PropTypes.string,             // Input placeholder
    onChange:               PropTypes.func,               // On value change callback
    type:                   PropTypes.string,             // Input type (text, password, tel etc.)
    maxLength:              PropTypes.number,             // Maximum allowed characters
    max:                    PropTypes.number,             // Max value if number type
    min:                    PropTypes.number,             // Min value if number type
    step:                   PropTypes.number,             // Step
    error:                  PropTypes.bool,               // Render input error indication

    counter:                PropTypes.bool,               // Show character counter
    icon:                   PropTypes.string,             // Show a prepended icon
    prepend:                PropTypes.object,             // Prepend icon or content
    onPrependClick:         PropTypes.func                // Callback for when prepend is clicked
};

Input.defaultProps = {
    type: "text",
    maxLength: 255,
};

export default Input
