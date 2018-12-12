import React from "react"
import PropTypes from "prop-types"
import styles from "./styles.scss"
import classNames from "classnames"


export default class FormItem extends React.Component {
    render(){

        // Properties
        const { label, error, className, info } = this.props;

        // Add props to children
        const childrenWithProps = React.Children.map(this.props.children, (child) => {

            // Check if null
            if(!child){
                return null;
            }

            return React.cloneElement(child, {
                error: error,
            });
        });


        // Classes
        const baseClasses = classNames(styles.base, {
            [styles.error]: error
        }, className);

        return (
            <div className={baseClasses}>

                {/* Label */}
                <div className={styles.label}>
                    {label ? (
                        <label>
                            {label}
                            <span className={styles.colon}>:</span>
                        </label>
                    ) : <span />}
                </div>

                {/* Field */}
                <div className={styles.field}>
                    {childrenWithProps}

                    {/* Info text */}
                    {info ? (
                        <div className={styles.infoText}>
                            {info}
                        </div>
                    ) : null}
                </div>

            </div>
        )
    }
}

FormItem.propTypes = {
    label:              PropTypes.oneOfType([
                            PropTypes.string,
                            PropTypes.bool
                        ]),
    error:              PropTypes.any
};
