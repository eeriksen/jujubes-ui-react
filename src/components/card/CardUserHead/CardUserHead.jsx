import React from "react"
import styles from "./styles.scss"


export default class CardUserHead extends React.Component {
    render(){

        // Properties
        const { picture, name, email } = this.props;

        return (
            <div className={styles.base}>
                <div className={styles.content}>
                    <div className={styles.image}>
                        <img src={picture} />
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
                    <img src={picture} />
                </div>
            </div>
        )
    }
}
