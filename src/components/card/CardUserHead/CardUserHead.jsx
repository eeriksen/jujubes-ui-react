import React from "react"
import styles from "./styles.scss"
import { Icon } from "../../graphic/Icon"

export class CardUserHead extends React.Component {
    render(){

        // Properties
        const { picture, name, email, alt } = this.props;

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
                        <div className={styles.name}>
                            {name}
                        </div>
                        <div className={styles.email}>
                            {email}
                        </div>
                    </div>
                </div>
                <div className={styles.background}>
                    <img alt={alt} src={picture} />
                </div>
            </div>
        )
    }
}
