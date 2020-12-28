import React from "react";
import PropTypes from "prop-types";
import styles from "./CardUserHead.scss";
import { Icon } from "../../graphic/Icon";

export const CardUserHead = (props) => {
    const { picture, name, email, alt } = props;

    return (
        <div className={styles.base}>
            <div className={styles.content}>
                <div className={styles.image}>
                    {picture ? (
                        <img alt={alt} src={picture} />
                    ) : (
                        <div className={styles.placeholder}>
                            <Icon name="user" />
                        </div>
                    )}
                </div>
                <div className={styles.details}>
                    <div className={styles.name}>{name}</div>
                    <div className={styles.email}>{email}</div>
                </div>
            </div>
            <div className={styles.background}>
                <img alt={alt} src={picture} />
            </div>
        </div>
    );
};

CardUserHead.propTypes = {
    /**
     * User image URL
     */
    picture: PropTypes.string,

    /**
     * Name of user
     */
    name: PropTypes.string,

    /**
     * Email of user
     */
    email: PropTypes.string
};
