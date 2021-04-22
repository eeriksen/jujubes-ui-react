import React from "react";
import { PropTypes } from "prop-types";
import { Icon } from "../../graphic/Icon";
import { Waiting } from "../../loader/Waiting";
import styles from "./CardLoadMore.scss";

export const CardLoadMore = ({ progress, busy, onClick }) => {
    return (
        <div className={styles.base}>
            {progress ? (
                <div className={styles.progress}>
                    <div className={styles.bar} style={{ width: `${progress}%` }} />
                </div>
            ) : null}

            <button className={styles.button} disabled={busy || progress >= 100} onClick={onClick}>
                {busy ? <Waiting /> : <Icon name={!progress || progress < 100 ? "arrow-down" : "check"} />}
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
