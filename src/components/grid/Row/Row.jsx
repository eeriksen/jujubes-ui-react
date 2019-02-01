import React from "react"
import PropTypes from "prop-types"
import { Children, cloneElement } from 'react'
import classNames from 'classnames'
import styles from "./styles.scss"


export default class Row extends React.Component {
    render() {

        let { className, gutter, spacing, children } = this.props;

        // Spacings
        const bottomSpacing = spacing && spacing.indexOf("bottom") >= 0;
        const columnSpacing = spacing && spacing.indexOf("column") >= 0;

        // Classes
        const classes = classNames(styles.row, {
            [styles.bottomSpacing]: bottomSpacing,
            [styles.colSpacing]: columnSpacing,
            [styles.gutterSmall]: gutter === "small"
        }, className);

        // Columns
        const cols = Children.map(children, (col) => {
            if (!col) {
                return null;
            }
            if (col.props) {
                return cloneElement(col, {
                    bottomSpacing: columnSpacing,
                    gutter: gutter
                });
            }
            return col;
        });

        return <div className={classes}>{cols}</div>;
    }
}

Row.propTypes = {
    className:              PropTypes.string,
    gutter:                 PropTypes.string,
    type:                   PropTypes.string,
    align:                  PropTypes.string,
    justify:                PropTypes.string,
    style:                  PropTypes.object,
    children:               PropTypes.node
};
