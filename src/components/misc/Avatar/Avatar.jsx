import React from "react"
import styles from "./styles.scss"

import Icon from "../../graphic/Icon"
import Clickable from "../../button/Clickable"

export default class Avatar extends React.Component {
    render(){

        // Properties
        const { imageUrl, onClick } = this.props;

        return (
            <Clickable block className={styles.base} onClick={onClick}>
                {imageUrl ? (
                    <div className={styles.image}>
                        <img src={imageUrl} />
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
