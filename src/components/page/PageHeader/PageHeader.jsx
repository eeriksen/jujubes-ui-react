import React from "react"
import styles from "./styles.scss"

import Clickable from "../../button/Clickable"

export default class PageHeader extends React.Component {

    render(){

        // Properties
        const { title, subtitle } = this.props;

        return (
            <div className={styles.base}>

                {/* Titles */}
                <div className={styles.titles}>
                    <h1 className={styles.mainTitle}>
                        {title}
                    </h1>
                    {subtitle ? (
                        <h4 className={styles.subTitle}>
                            {subtitle}
                        </h4>
                    ) : null}
                </div>

            </div>
        )
    }


}
