import React from "react";
import styles from "./PageHero.scss";

export const PageHero = ({ logo, image, title, subtitle }) => {
    return (
        <div className={styles.base}>
            <div className={styles.wrapper}>
                {/* Logo */}
                {logo ? <div className={styles.logo}>{logo}</div> : null}

                {/* Content */}
                <div className={styles.content}>
                    {image ? (
                        <div className={styles.image}>
                            <div className={styles.frame}>{image}</div>
                        </div>
                    ) : null}
                    <div className={styles.titles}>
                        {title ? <div className={styles.title}>{title}</div> : null}
                        {subtitle ? <div className={styles.subtitle}>{subtitle}</div> : null}
                    </div>
                </div>
            </div>
        </div>
    );
};
