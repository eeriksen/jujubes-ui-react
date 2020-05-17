import React from "react"
import styles from "./styles.scss"

export const PageHeader = ({title, subtitle}) => {
    return (
        <div className={styles.base}>

            {/* Titles */}
            <div className={styles.titles}>
                <h1 className={styles.mainTitle}>
                    {title}
                </h1>
                {subtitle ? (
                    <div className={styles.subTitle}>
                        {subtitle}
                    </div>
                ) : null}
            </div>
        </div>
    )
};
