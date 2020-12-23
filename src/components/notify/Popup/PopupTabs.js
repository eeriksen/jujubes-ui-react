import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";

import { Tabs } from "../../navigation/Tabs";

export const PopupTabs = ({ children }) => {
    return (
        <div className={styles.tabs}>
            {React.Children.map(children, (child, index) => {
                if (child.type === Tabs) {
                    return React.cloneElement(child, {
                        popupMode: true
                    });
                }
            })}
        </div>
    );
};

PopupTabs.propTypes = {
    /**
     * Tabs component
     */
    children: PropTypes.element
};
