import React from "react"
import PropTypes from "prop-types"
import classNames from 'classnames'
import styles from "./styles.scss"


export const Row = (props) => {
    const { className, children, gutter } = props;
    const rowClasses = classNames(styles.row, {

    }, className);
    return (
        <div className={rowClasses}>
            {React.Children.map(children, child =>
                React.cloneElement(child, {
                    gutter
                })
            )}
        </div>
    )
};

Row.propTypes = {
    className:              PropTypes.string,
    children:               PropTypes.node
};
