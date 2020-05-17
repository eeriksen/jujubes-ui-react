import React from "react"
import classNames from "classnames"
import styles from "./styles.scss"
import { useHistory, useLocation } from "react-router-dom"
import { ScrollableArea } from "../../layout/ScrollableArea"


import { Clickable } from "../../button/Clickable"
import { Icon } from "../../graphic/Icon"

export const Tabs = ({activeKey, onChange, children}) => {
    const history = useHistory();
    const location = useLocation();

    /**
     * Handle table click
     */
    const handleTabClick = (pane) => {
        if(pane.props.link){
            history.replace(pane.props.link);
        }
        onChange && onChange(parseInt(pane.key, 10));
    };



    // Classes
    const baseClasses = classNames(styles.base);

    return (
        <div className={baseClasses}>

            {/* Tabs */}
            <div className={styles.tabs}>
                <ScrollableArea>
                    <div className={styles.wrapper}>
                        {children && children.map((pane) => {

                            const tabIsActive = pane.props.link ? pane.props.link === location.pathname : parseInt(pane.key, 10) === activeKey;

                            const tabClasses = classNames(styles.tab, {
                                [styles.active]: tabIsActive
                            });

                            return (
                                <Clickable key={pane.key} className={tabClasses} onClick={() => handleTabClick(pane)}>

                                    {/* Icon */}
                                    {pane.props.icon ? (
                                        <Icon name={pane.props.icon} className={styles.icon} />
                                    ) : null}

                                    {/* Label */}
                                    {pane.props.label ? (
                                        <span className={styles.label}>
                                                {pane.props.label}
                                            </span>
                                    ) : null}


                                </Clickable>
                            )
                        })}
                    </div>
                </ScrollableArea>
            </div>

            {/* Tab panes */}
            {children.filter((pane) => pane.props.link ? pane.props.link === location.pathname : parseInt(pane.key, 10) === activeKey)[0]}

        </div>
    )
}
