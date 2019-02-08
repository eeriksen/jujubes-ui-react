import React from "react"
import styles from "./styles.scss"


export default class extends React.Component {
    render(){

        // Properties
        const { title, description } = this.props;

        return (
            <div className={styles.title}>
                {title}

                {description ? (
                    <div className={styles.description}>
                        {description}
                    </div>
                ) : null}

            </div>
        )
    }
}
