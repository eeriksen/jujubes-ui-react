import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./Tabs.scss";
import { useLocation } from "react-router-dom";
import { ScrollableArea } from "../../layout/ScrollableArea";
import { TabPane } from "./TabPane";

export const Tabs = ({ activeKey, onChange, children }) => {
    const location = useLocation();
    const [activePaneIndex, setActivePaneIndex] = useState(null);

    useEffect(() => {
        setActivePaneIndex(null);
        if (activeKey) {
            children &&
                children.forEach((pane, index) => {
                    if (
                        pane.props.link
                            ? pane.props.link === location.pathname
                            : pane.props.tabKey === activeKey
                    ) {
                        setActivePaneIndex(index);
                    }
                });
        }
    }, [activeKey]);

    return (
        <div className={styles.base}>
            {/* Tabs */}
            <div className={styles.tabs}>
                <ScrollableArea suppressScrollY>
                    <div className={styles.wrapper}>
                        {React.Children.map(children, (child) => {
                            if (child && child.type === TabPane) {
                                return React.cloneElement(child, {
                                    activeKey,
                                    onChange
                                });
                            }
                        })}
                    </div>
                </ScrollableArea>
            </div>

            {/* Tab panes */}
            {activePaneIndex !== null ? children[activePaneIndex].props.children : null}
        </div>
    );
};

Tabs.propTypes = {
    /**
     * The active tab key
     */
    activeKey: PropTypes.any,
    /**
     * Tab clicked callback that returns the respective key
     */
    onChange: PropTypes.func
};
