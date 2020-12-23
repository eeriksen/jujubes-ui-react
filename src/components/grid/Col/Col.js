import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import styles from "./styles.scss"

import { Filler } from "../Filler"


export const Col = (props) => {
    const { span, order, offset, push, pull, gutter, className, children } = props;

    let spanLabel = 0;
    let sizeClassObj = {};

    ['xs', 'sm', 'md', 'lg'].forEach(size => {

        let sizeProps = {
            span, order, offset, push, pull
        };

        if (typeof props[size] === 'number') {
            sizeProps.span = props[size];
        } else if (typeof props[size] === 'object') {
            sizeProps = props[size] || {};
        }

        // Set span label
        if(sizeProps.span > spanLabel){
            spanLabel = sizeProps.span;
        }

        sizeClassObj = Object.assign({}, sizeClassObj, {
            [styles[`grid_col_${size}_${sizeProps.span}`]]: sizeProps.span !== undefined,
            [styles[`grid_col_${size}_order_${sizeProps.order}`]]: sizeProps.order || sizeProps.order === 0,
            [styles[`grid_col_${size}_offset_${sizeProps.offset}`]]: sizeProps.offset || sizeProps.offset === 0,
            [styles[`grid_col_${size}_push_${sizeProps.push}`]]: sizeProps.push || sizeProps.push === 0,
            [styles[`grid_col_${size}_pull_${sizeProps.pull}`]]: sizeProps.pull || sizeProps.pull === 0,
        });

    });

    const colClasses = classNames({
        [styles[`grid_col_${span}`]]: span !== undefined,
        [styles[`grid_col_order_${order}`]]: order,
        [styles[`grid_col_offset_${offset}`]]: offset,
        [styles[`grid_col_push_${push}`]]: push,
        [styles[`grid_col_pull_${pull}`]]: pull,
        [styles[`gutter_ver_${gutter[0]}`]]: gutter[0],
        [styles[`gutter_hor_${gutter[1]}`]]: gutter[1]
    }, className, sizeClassObj);

    return (
        <div className={colClasses}>
            {children ? children : (
                <Filler>{spanLabel}</Filler>
            )}
        </div>
    );
}

const stringOrNumber = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);
const objectOrNumber = PropTypes.oneOfType([PropTypes.object, PropTypes.number]);


Col.propTypes = {

    /**
     * Span units of given column.
     */
    span: stringOrNumber,

    /**
     * Order of columns if flex
     */
    order: stringOrNumber,

    /**
     * Left offset units of given column.
     */
    offset: stringOrNumber,

    /**
     * Push the column number of units to the right.
     */
    push: stringOrNumber,

    /**
     * Pull the column number of units to the left.
     */
    pull: stringOrNumber,

    /**
     * Add custom class name
     */
    className: PropTypes.string,

    /**
     * Define span and offset for extra small screens.
     */
    xs: objectOrNumber,

    /**
     * Define span and offset for small screens.
     */
    sm: objectOrNumber,

    /**
     * Define span and offset for medium screens.
     */
    md: objectOrNumber,

    /**
     * Define span and offset for large screens.
     */
    lg: objectOrNumber
};
