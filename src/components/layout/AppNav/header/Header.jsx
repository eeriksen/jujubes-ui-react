import React from "react"
import styles from "./styles.scss"
import Clickable from "../../../button/Clickable/index"


export default class extends React.Component {
    render(){

        // Properties
        const { title, logo, link, onClick } = this.props;

        return (
            <div className={styles.header}>
                <Clickable className={styles.logo} link={link} onClick={onClick}>
                    {logo}
                </Clickable>

                {title ? (
                    <div className={styles.title}>
                        {title}
                    </div>
                ) : null}

            </div>
        )
    }
}
