import React from "react"
import styles from "./styles.scss"

import Icon from "../../../graphic/Icon"

export default class extends React.Component {
    render(){

        // Properties
        const { icon, children, lead } = this.props;

        return (
            <div className={styles.base}>

                {/* Icon */}
                {icon ? (
                    <div className={styles.icon}>
                        <Icon name={icon} />
                    </div>
                ) : null}

                {/* Title */}
                <div className={styles.title}>
                    {children}
                </div>

                {/* Lead */}
                {lead ? (
                    <div className={styles.lead}>
                        {lead}
                    </div>
                ) : null}
            </div>
        )
    }
}
