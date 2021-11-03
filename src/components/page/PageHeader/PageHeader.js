import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./PageHeader.scss";
import { Icon, iconList } from "../../graphic/Icon";

export const PageHeader = ({ icon, image, title, subtitle }) => {
    return (
        <div
            className={classNames(styles.base, {
                [styles.withSymbol]: icon || image
            })}
        >
            {/* Icon */}
            {icon || image ? (
                <div className={styles.symbol}>
                    {icon ? (
                        <div className={styles.icon}>
                            <Icon name={icon} />
                        </div>
                    ) : image ? image : null}
                </div>
            ) : null}

            {/* Titles */}
            <div className={styles.titles}>
                <h1 className={styles.mainTitle}>{title}</h1>
                {subtitle ? (
                    <div className={styles.subTitle}>
                        <div className={styles.dots}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13">
                                <g fillRule="evenodd">
                                    <circle cx="11.5" cy="11.5" r="1.5" />
                                    <circle cx="6.5" cy="11.5" r="1.5" />
                                    <circle cx="1.5" cy="11.5" r="1.5" />
                                    <circle cx="1.5" cy="6.5" r="1.5" />
                                    <circle cx="1.5" cy="1.5" r="1.5" />
                                </g>
                            </svg>
                        </div>
                        <div className={styles.text}>{subtitle}</div>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

PageHeader.propTypes = {
    /**
     * Page main title
     */
    title: PropTypes.string,
    /**
     * Another smaller sub title
     */
    subtitle: PropTypes.string,
    /**
     * Icon to display beside the title
     */
    icon: PropTypes.oneOf([null, ...iconList])
};
