import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import style from "./style.scss"

import Filler from "../Filler"

const stringOrNumber = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);
const objectOrNumber = PropTypes.oneOfType([PropTypes.object, PropTypes.number]);



export default class Col extends React.Component {

    render() {

        const props = this.props;

        const { span, order, offset, push, pull, className, children, bottomSpacing, alignRight, alignCenter, ...others } = props;
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

            delete others[size];

            // Set span label
            if(sizeProps.span > spanLabel){
                spanLabel = sizeProps.span;
            }

            sizeClassObj = Object.assign({}, sizeClassObj, {
                [style[`grid_col_${size}_${sizeProps.span}`]]: sizeProps.span !== undefined,
                [style[`grid_col_${size}_order_${sizeProps.order}`]]: sizeProps.order || sizeProps.order === 0,
                [style[`grid_col_${size}_offset_${sizeProps.offset}`]]: sizeProps.offset || sizeProps.offset === 0,
                [style[`grid_col_${size}_push_${sizeProps.push}`]]: sizeProps.push || sizeProps.push === 0,
                [style[`grid_col_${size}_pull_${sizeProps.pull}`]]: sizeProps.pull || sizeProps.pull === 0,
            });

        });

        const classes = classNames({
            [style.grid_col_spacing_bottom]: bottomSpacing,
            [style.grid_col_align_right]: alignRight,
            [style.grid_col_align_center]: alignCenter,
            [style[`grid_col_${span}`]]: span !== undefined,
            [style[`grid_col_order_${order}`]]: order,
            [style[`grid_col_offset_${offset}`]]: offset,
            [style[`grid_col_push_${push}`]]: push,
            [style[`grid_col_pull_${pull}`]]: pull
        }, className, sizeClassObj);

        return <div {...others} className={classes}>
            {children ? children : (
                <Filler>{spanLabel}</Filler>
            )}
        </div>;
    }
}


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
