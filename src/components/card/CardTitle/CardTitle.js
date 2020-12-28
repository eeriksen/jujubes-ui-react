import React from "react";
import PropTypes from "prop-types";
import styles from "./CardTitle.scss";

import { Clickable } from "../../button/Clickable";
import { Icon } from "../../graphic/Icon";

export const CardTitle = (props) => {
    const { title, actions, children } = props;

    return (
        <div className={styles.base}>
            <div className={styles.title}>{title}</div>

            {/* Addons */}
            {children ? (
                <div className={styles.addons}>
                    <div className={styles.wrapper}>{children}</div>
                </div>
            ) : null}

            {/* Actions */}
            {actions && actions.length ? (
                <div className={styles.actions}>
                    {actions.map((action, index) => (
                        <Clickable
                            key={`CardTitleAction-${index}`}
                            onClick={action.onClick}
                            className={styles.action}
                        >
                            <Icon name={action.icon || "ligtning"} />
                        </Clickable>
                    ))}
                </div>
            ) : null}
        </div>
    );
};

CardTitle.propTypes = {
    /**
     * Addons to be displayed
     */
    children: PropTypes.object,

    /**
     * Title to be displayed
     */
    title: PropTypes.string,

    /**
     * Actions to be displayed
     */
    actions: PropTypes.array
};
