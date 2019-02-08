import React from "react"
import styles from "./styles.scss"

import Clickable from "../../button/Clickable"
import Icon from "../../graphic/Icon"

export default class PageHeader extends React.Component {

    render(){

        // Properties
        const { title, subtitle, crumbs } = this.props;

        return (
            <div className={styles.base}>

                {/* Breadcrumbs */}
                {crumbs && crumbs.length ? (
                    <ul className={styles.breadcrumbs}>
                        {crumbs.map((crumb, index) => (
                            <li key={index} className={styles.crumb}>
                                <Clickable link={crumb.link}>
                                    {crumb.label}
                                </Clickable>

                                {index < crumbs.length - 1 ? (
                                    <span className={styles.divider}>
                                        <Icon name="chevron-right" />
                                    </span>
                                ) : null}

                            </li>
                        ))}
                    </ul>
                ) : null}

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
