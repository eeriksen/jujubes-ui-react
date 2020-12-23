import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./styles.scss";

import { Clickable } from "../../button/Clickable";
import { Icon } from "../../graphic/Icon";
import { Badge } from "../../notify/Badge";

export const MenuItem = ({ label, icon, iconColor, link, selected, count, indicator, onClick }) => {
    const handleClick = (e) => {
        e.stopPropagation();
        onClick && onClick(e);
    };

    return (
        <Clickable
            className={classNames(styles.item, {
                [styles.selected]: selected
            })}
            activeClassName={styles.selected}
            onClick={handleClick}
            link={link}
        >
            {/* Icon */}
            {icon ? (
                <span className={styles.icon}>
                    <Icon color={iconColor || "primary"} name={icon} />
                </span>
            ) : null}

            {/* Label */}
            <span className={styles.label}>{label}</span>

            {/* Indicator */}
            {indicator ? <span className={styles.indicator}>{indicator}</span> : null}

            {/* Counter */}
            {count ? (
                <span className={styles.counter}>
                    <Badge fill number color="error">
                        {count}
                    </Badge>
                </span>
            ) : null}
        </Clickable>
    );
};

MenuItem.propTypes = {
    /**
     * Menu item label
     */
    label: PropTypes.string,
    /**
     * Icon to show on item
     */
    icon: PropTypes.string,
    /**
     * Color of icon
     */
    iconColor: PropTypes.string,
    /**
     * React-router link
     */
    link: PropTypes.string,
    /**
     * Mark item as selected
     */
    selected: PropTypes.bool,
    /**
     * Counter
     */
    count: PropTypes.number,
    /**
     * Indicator of some sort, preferrably an icon
     */
    indicator: PropTypes.any,
    /**
     * Click handler
     */
    onClick: PropTypes.func
};
