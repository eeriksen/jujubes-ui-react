import React, { useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./CardTitle.scss";

import { Clickable } from "../../button/Clickable";
import { Icon } from "../../graphic/Icon";
import { PopOver } from "../../navigation/PopOver";

export const CardTitle = (props) => {
    const { title, actions, children } = props;
    const [activeAction, setActiveAction] = useState(null);

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
                    {actions.map((action, index) =>
                        action.content ? (
                            <PopOver
                                key={index}
                                visible={activeAction === index}
                                onClose={() => setActiveAction(null)}
                                content={
                                    action.content &&
                                    action.content({ onClose: () => setActiveAction(null) })
                                }
                            >
                                <ActionClickable
                                    {...action}
                                    active={activeAction === index}
                                    onClick={() =>
                                        setActiveAction(activeAction === index ? null : index)
                                    }
                                />
                            </PopOver>
                        ) : (
                            <ActionClickable key={index} index={index} {...action} />
                        )
                    )}
                </div>
            ) : null}
        </div>
    );
};

const ActionClickable = ({ index, onClick, icon, iconColor, active }) => {
    return (
        <Clickable
            key={`CardTitleAction-${index}`}
            onClick={onClick}
            className={classNames(styles.action, {
                [styles.active]: active
            })}
        >
            <Icon name={icon || "edit"} color={iconColor} />
        </Clickable>
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
