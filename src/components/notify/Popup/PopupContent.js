import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";

import { ScrollableArea } from "../../layout/ScrollableArea";

export const PopupContent = ({ children }) => {
    return (
        <div className={styles.content}>
            <ScrollableArea>
                <div className={styles.frame}>
                    <div className={styles.wrapper}>{children}</div>
                </div>
            </ScrollableArea>
        </div>
    );
};

PopupContent.propTypes = {
    /**
     * Any content of the popup
     */
    children: PropTypes.any
};
