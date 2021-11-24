import React from "react";
import classNames from "classnames";
import styles from "./KeyValueList.scss";
import { PropTypes } from "prop-types";
// import Item from "./Item";


export const KeyValueList = ({ horizontal, children }) => {
    return (
        <table
            className={classNames(styles.base, {
                [styles.horizontal]: horizontal
            })}
        >
            {horizontal ? (
                <React.Fragment>
                    <thead>
                        <tr>
                            {React.Children.map(children, (child, index) => (
                                <th key={index} className={styles.key}>
                                    {child.props.label}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {React.Children.map(children, (child, index) => (
                                <td key={index} className={styles.value}>
                                    {child.props.children}
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </React.Fragment>
            ) : (
                <tbody>{children}</tbody>
            )}
        </table>
    );
};

KeyValueList.defaultProps = {
    horizontal: false
};

KeyValueList.propTypes = {
    /**
     * Display values horizontally
     */
    horizontal: PropTypes.bool
};
