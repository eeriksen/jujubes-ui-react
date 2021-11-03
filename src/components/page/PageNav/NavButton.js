import React from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./PageNav.scss";
import { Clickable } from "../../button/Clickable";
import { Icon } from "../../graphic/Icon";

export const NavButton = ({ icon, label, count, active, onClick, link }) => {
    const { pathname } = useLocation();
    return (
        <Clickable
            className={classNames(styles.button, {
                [styles.active]: active || (link && pathname.startsWith(link))
            })}
            link={link}
            onClick={!active ? onClick : null}
            activeClassName={styles.active}
            title={label}
        >
            <span className={styles.icon}>
                <Icon name={icon} />
            </span>
            <span className={styles.label}>{label}</span>

            {count ? <span className={styles.count}>{count}</span> : null}
        </Clickable>
    );
};

NavButton.propTypes = {
    /**
     * The text label of the button.
     */
    label: PropTypes.string,
    /**
     * The name of an icon to display.
     */
    icon: PropTypes.string,
    /**
     * Display a counter on the button.
     */
    count: PropTypes.element,
    /**
     * The link this button should navigate to.
     */
    link: PropTypes.string,
    /**
     * Click handler.
     */
    onClick: PropTypes.func,
    /**
     * Define manually if button should show as active or not. Used in conjunction with onClick.
     */
    active: PropTypes.bool
};
