import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import classNames from "classnames";
import styles from "./MenuItem.scss";

import { Clickable } from "../../../button/Clickable";
import { Icon } from "../../../graphic/Icon";
import { AppContext } from "../../AppContext";

export const MenuItem = ({ icon, link, indicator, children }) => {
    const { setNavActive } = useContext(AppContext);
    const { pathname } = useLocation();
    const itemClasses = classNames(styles.item, {
        [styles.selected]: link && pathname.endsWith(link)
    });

    const handleClick = () => {
        setNavActive(false);
    };

    return (
        <Clickable className={itemClasses} link={link} onClick={handleClick}>
            {/* Icon */}
            {icon ? (
                <div className={styles.icon}>
                    <Icon name={icon} />
                </div>
            ) : null}

            {/* Label */}
            <div className={styles.label}>{children}</div>

            {/* Indicators */}
            <div className={styles.indicators}>
                {indicator ? indicator : <Icon className={styles.arrow} name="chevron-right" />}
            </div>
        </Clickable>
    );
};
