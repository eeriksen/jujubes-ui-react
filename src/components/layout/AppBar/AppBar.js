import React, { useContext } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./AppBar.scss";

import { MenuButton } from "../../button/MenuButton";
import { SubButton } from "../../button/SubButton";
import { AppContext } from "../AppContext";

export const AppBar = ({ title, children, right }) => {
    const { subBarActive, setSubBarActive, navActive, setNavActive } = useContext(AppContext);

    // Classes
    const baseClasses = classNames(styles.base, {
        [styles.subBarActive]: subBarActive
    });

    return (
        <div className={baseClasses}>
            <div className={styles.mainBar}>
                <div className={styles.left}>
                    <MenuButton onClick={() => setNavActive(!navActive)} />
                </div>
                <div className={styles.center}>
                    <div className={styles.text}>{title}</div>
                </div>
                {right || children ? (
                    <div className={styles.right}>
                        {right ? (
                            right
                        ) : (
                            <SubButton
                                onClick={() => setSubBarActive(!subBarActive)}
                                active={subBarActive}
                            />
                        )}
                    </div>
                ) : null}
            </div>

            {children ? (
                <div className={styles.subBar}>
                    <div className={styles.left}>
                        {React.Children.toArray(children).filter((c) => c.props.placeLeft)}
                    </div>
                    <div className={styles.right}>
                        {React.Children.toArray(children).filter((c) => c.props.placeRight)}
                    </div>
                </div>
            ) : null}
        </div>
    );
};

AppBar.propTypes = {
    /**
     * Title displayed on mobile devices
     */
    title: PropTypes.string
};
