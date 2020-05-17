import React from "react"
import classNames from "classnames"
import styles from "./styles.scss"

import { Icon } from "../../graphic/Icon"
import { Clickable } from "../../button/Clickable"

export class Avatar extends React.Component {
    render(){

        // Properties
        const { imageUrl, onClick, className, alt } = this.props;

        // Classes
        const baseClasses = classNames(styles.base, className);

        return (
            <Clickable block className={baseClasses} onClick={onClick}>
                {imageUrl ? (
                    <div className={styles.image}>
                        <img alt={alt} src={imageUrl} />
                    </div>
                ) : (
                    <div className={styles.placeholder}>
                        <Icon name="user" />
                    </div>
                )}
            </Clickable>
        )
    }
}
