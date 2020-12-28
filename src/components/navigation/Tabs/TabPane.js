import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./TabPane.scss";
import { Icon, iconList } from "../../graphic/Icon/Icon";
import { Clickable } from "../../button/Clickable";
import { useHistory, useLocation } from "react-router-dom";

export const TabPane = ({ label, icon, link, tabKey, children, onChange, activeKey }) => {
    const location = useLocation();
    const history = useHistory();

    /**
     * Handle table click
     */
    const handleTabClick = () => {
        if (link) {
            history.replace(link);
        }
        onChange && onChange(tabKey);
    };

    return children ? (
        <Clickable
            className={classNames(styles.tab, {
                [styles.active]: link ? link === location.pathname : tabKey === activeKey
            })}
            onClick={handleTabClick}
        >
            {/* Icon */}
            {icon ? <Icon name={icon} className={styles.icon} /> : null}

            {/* Label */}
            {label ? <span className={styles.label}>{label}</span> : null}
        </Clickable>
    ) : null;
};

TabPane.propTypes = {
    /**
     * Tab label
     */
    label: PropTypes.string,
    /**
     * Tab icon
     */
    icon: PropTypes.oneOf(iconList),
    /**
     * Key that indicates active pane
     */
    tabKey: PropTypes.any,
    /**
     * Link path that activates tab. (Use instead of tabKey)
     */
    link: PropTypes.string,
    /**
     * Content of tab pane
     */
    children: PropTypes.element
};
