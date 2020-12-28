import React, { useContext } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./AppBar.scss";

import { MenuButton } from "../../button/MenuButton";
import { DotsButton } from "../../button/DotsButton";
import { AppContext } from "../AppContext";

export const AppBar = ({ title, children }) => {
    const layout = useContext(AppContext);

    // Classes
    const baseClasses = classNames(styles.base, {
        [styles.subBarActive]: layout.subBarActive
    });

    return (
        <div className={baseClasses}>
            <div className={styles.mainBar}>
                <div className={styles.left}>
                    <MenuButton onClick={() => layout.setNavActive(!layout.navActive)} />
                </div>
                <div className={styles.center}>
                    <div className={styles.text}>{title}</div>
                </div>
                <div className={styles.right}>
                    <DotsButton
                        onClick={() => layout.setSubBarActive(!layout.subBarActive)}
                        active={layout.subBarActive}
                    />
                </div>
            </div>
            <div className={styles.subBar}>
                <div className={styles.left}>
                    {React.Children.toArray(children).filter((c) => c.props.placeLeft)}
                </div>
                <div className={styles.right}>
                    {React.Children.toArray(children).filter((c) => c.props.placeRight)}
                </div>
            </div>
        </div>
    );
};

AppBar.propTypes = {
    /**
     * Title displayed on mobile devices
     */
    title: PropTypes.string
};
