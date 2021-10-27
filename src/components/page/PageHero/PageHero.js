import React from "react";
import classNames from "classnames";
import styles from "./PageHero.scss";
import { ContentWrapper } from "../../layout/ContentWrapper";

export const PageHero = ({ children, image, title, subtitle }) => {
    return (
        <div
            className={classNames(styles.base, {
                [styles.withImage]: image
            })}
        >
            <ContentWrapper confine="page" className={styles.wrapper}>
                {children ? <div className={styles.heading}>{children}</div> : null}

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
            </ContentWrapper>
        </div>
    );
};
