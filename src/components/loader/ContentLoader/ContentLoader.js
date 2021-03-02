import React from "react";
import styles from "./ContentLoader.scss";
import ReactContentLoader from "react-content-loader";

export const ContentLoader = ({ viewBox, width, height, children }) => {
    return (
        <div className={styles.base}>
            <ReactContentLoader
                width={width}
                height={height}
                viewBox={viewBox}
                backgroundColor="rgba(var(--color_base), 0.1)"
                foregroundColor="rgba(var(--color_base), 0.2)"
            >
                {children}
            </ReactContentLoader>
        </div>
    );
};
