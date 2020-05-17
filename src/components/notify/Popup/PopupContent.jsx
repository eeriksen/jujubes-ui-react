import React from "react"
import classNames from "classnames"
import styles from "./styles.scss"

import { ScrollableArea } from "../../layout/ScrollableArea"


export class PopupContent extends React.Component {
    render(){

        // Properties
        const { children } = this.props;

        const classes = classNames(styles.content);

        return (
            <div className={classes}>
                <ScrollableArea>
                    <div className={styles.frame}>
                        <div className={styles.wrapper}>
                            {children}
                        </div>
                    </div>
                </ScrollableArea>
            </div>
        )
    }
}
