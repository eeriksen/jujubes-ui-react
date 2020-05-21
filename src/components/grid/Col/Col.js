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

    const classes = classNames({
        [styles[`grid_col_${span}`]]: span !== undefined,
        [styles[`grid_col_order_${order}`]]: order,
        [styles[`grid_col_offset_${offset}`]]: offset,
        [styles[`grid_col_push_${push}`]]: push,
        [styles[`grid_col_pull_${pull}`]]: pull
    }, className, sizeClassObj);

    return (
        <div  className={classes}>
            {children ? children : (
                <Filler>{spanLabel}</Filler>
            )}
        </div>
    );
}

const stringOrNumber = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);
const objectOrNumber = PropTypes.oneOfType([PropTypes.object, PropTypes.number]);

Col.propTypes = {
    span: stringOrNumber,
    order: stringOrNumber,
    offset: stringOrNumber,
    push: stringOrNumber,
    pull: stringOrNumber,
    className: PropTypes.string,
    children: PropTypes.node,
    xs: objectOrNumber,
    sm: objectOrNumber,
    md: objectOrNumber,
    lg: objectOrNumber,
};
