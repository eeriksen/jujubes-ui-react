import React from "react"
import PropTypes from "prop-types"
import { Children, cloneElement } from 'react'
import classNames from 'classnames'
import style from "./style.scss"


export default class Row extends React.Component {
    render() {

        let { type, justify, align, className, gutter, bottomSpacing, colSpacing, maxWidth, children, ...others } = this.props;

        type = !type ? null : type.charAt(0).toUpperCase() + type.slice(1);
        justify = !justify ? null : justify.charAt(0).toUpperCase() + justify.slice(1);
        align = !align ? null : align.charAt(0).toUpperCase() + align.slice(1);

        // Classes
        const classes = classNames({
            [style.row]: !type,
            [style[`row${type}`]]: type,
            [style[`row${type}${justify}`]]: justify,
            [style[`row${type}${align}`]]: align,
            [style.bottomSpacing]: bottomSpacing,
            [style.colSpacing]: colSpacing
        }, className);

        // Row style
        const rowStyle = gutter > 0 ? Object.assign({}, {
            maxWidth: maxWidth,
            marginLeft: gutter / -2,
            marginRight: gutter / -2,
        }, this.props.style) : this.props.style;

        // Columns
        const cols = Children.map(children, (col) => {
            if (!col) {
                return null;
            }
            if (col.props) {
                return cloneElement(col, {
                    style: gutter > 0 ? Object.assign({}, {
                        paddingLeft: gutter / 2,
                        paddingRight: gutter / 2,
                    }, col.props.style) : col.props.style,
                    bottomSpacing: colSpacing
                });
            }
            return col;
        });

        return <div {...others} className={classes} style={rowStyle}>{cols}</div>;
    }
}

Row.propTypes = {
    className:              PropTypes.string,
    gutter:                 PropTypes.number,
    type:                   PropTypes.string,
    align:                  PropTypes.string,
    justify:                PropTypes.string,
    style:                  PropTypes.object,
    children:               PropTypes.node
};

Row.defaultProps = {
    gutter:                 0
};
