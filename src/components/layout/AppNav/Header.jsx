import React from "react"
import styles from "./styles.scss"
import Clickable from "../../button/Clickable/index"


export default class extends React.Component {
    render(){

        // Properties
        const { logo, link, onClick } = this.props;

        return (
            <div className={styles.header}>
                <Clickable className={styles.logo} link={link} onClick={onClick}>
                    {logo}
                </Clickable>
            </div>
        )
    }
}
