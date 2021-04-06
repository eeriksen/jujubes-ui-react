import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./NavPanes.scss";

import { Clickable } from "../../button/Clickable";
import { Icon } from "../../graphic/Icon";

export const NavPanes = ({ activeKey, onChange, children, size }) => {
    return (
        <div
            className={classNames(styles.base, {
                [styles.sizeEmbedded]: size === "embedded",
                [styles.sizeFit]: size === "fit"
            })}
        >
            <div className={styles.layout}>
                <div className={styles.wrapper}>
                    <nav className={styles.nav}>
                        {children &&
                            React.Children.map(children, (pane) => {
                                const { paneKey, icon, label } = pane.props;
                                const itemClasses = classNames(styles.item, {
                                    [styles.active]: activeKey === paneKey
                                });

                                return (
                                    <Clickable
                                        key={paneKey}
                                        className={itemClasses}
                                        onClick={() => onChange(paneKey)}
                                    >
                                        {icon ? (
                                            <div className={styles.icon}>
                                                <Icon name={icon} />
                                            </div>
                                        ) : null}
                                        {label ? <div className={styles.label}>{label}</div> : null}
                                    </Clickable>
                                );
                            })}
                    </nav>
                    <div className={styles.content}>
                        {children &&
                            React.Children.toArray(children).find(
                                (pane) => pane.props.paneKey === activeKey
                            )}
                    </div>
                </div>
            </div>
        </div>
    );
};

NavPanes.propTypes = {
    /**
     * The current active panes key.
     */
    activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /**
     * Callback triggered when panes are toggled.
     */
    onChange: PropTypes.func,
    /**
     * Size of container
     */
    size: PropTypes.oneOf(["embedded", "fit"])
};
