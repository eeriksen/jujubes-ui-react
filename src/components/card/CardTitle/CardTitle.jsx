import React from "react"
import styles from "./styles.scss"

import Clickable from "../../button/Clickable"
import Icon from "../../graphic/Icon"

export default class CardTitle extends React.Component {
    render(){

        // Properties
        const { title, actions, children } = this.props;

        return (
            <div className={styles.base}>
                <div className={styles.title}>
                    {title}
                </div>

                {/* Addons */}
                {children ? (
                    <div className={styles.addons}>
                        <div className={styles.wrapper}>
                            {children}
                        </div>
                    </div>
                ) : null}

                {/* Actions */}
                {actions && actions.length ? (
                    <div className={styles.actions}>
                        {actions.map((action, index) => (
                            <Clickable key={`CardTitleAction-${index}`} onClick={action.onClick} className={styles.action}>
                                <Icon name={action.icon || 'ligtning'} />
                            </Clickable>
                        ))}
                    </div>
                ) : null}
            </div>
        )
    }
}
