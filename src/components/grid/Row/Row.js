import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Row.scss";
import { Col } from "../Col";

export const Row = (props) => {
    const { className, children, gutter, spacing } = props;

    return (
        <div
            className={classNames(
                styles.row,
                {
                    [styles[`gutter_ver_${gutter[0]}`]]: gutter[0],
                    [styles[`gutter_hor_${gutter[1]}`]]: gutter[1],
                    [styles[`spacing_${spacing}`]]: spacing
                },
                className
            )}
        >
            {React.Children.map(children, (child) =>{
                return child && child.type === Col ? (
                    React.cloneElement(child, {
                        gutter
                    })
                ) : child;
            })}
        </div>
    );
};

Row.defaultProps = {
    spacing: null,
    gutter: ["regular", "regular"]
};

Row.propTypes = {
    /**
     * Define vertical/horizontal gutter
     */
    gutter: PropTypes.array,

    /**
     * Bottom spacing on the row
     */
    spacing: PropTypes.oneOf([null, "small", "regular", "large"]),

    /**
     * Custom class name
     */
    className: PropTypes.string
};
