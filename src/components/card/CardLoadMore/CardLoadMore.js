import React from "react";
import { PropTypes } from "prop-types";
import { Icon } from "../../graphic/Icon";
import { Waiting } from "../../loader/Waiting";
import styles from "./CardLoadMore.scss";

export const CardLoadMore = ({ progress, busy, onClick }) => {
    return (
        <div className={styles.base}>
            <div className={styles.progress}>
                <div className={styles.bar} style={{ width: `${progress}%` }} />
            </div>
            <button className={styles.button} disabled={busy} onClick={onClick}>
                {busy ? <Waiting /> : <Icon name="arrow-down" />}
            </button>
        </div>
    );
};

CardLoadMore.propTypes = {
    /**
     * Progress of content displayed
     */
    progress: PropTypes.number,
    /**
     * Show busy indicator and disable click
     */
    busy: PropTypes.bool,
    /**
     * Click handler
     */
    onClick: PropTypes.func
};
