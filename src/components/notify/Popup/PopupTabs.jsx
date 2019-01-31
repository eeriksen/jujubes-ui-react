import React from "react"
import styles from "./styles.scss"

import { Tabs } from "../../nav/Tabs"

export default class PopupTabs extends React.Component {
    render(){

        let tabsElement = null;

        React.Children.map(this.props.children, (child, index) => {
            if(child.type === Tabs){
                tabsElement = React.cloneElement(child, {
                    popupMode: true
                });
            }
        });

        return (
            <div className={styles.tabs}>
                {tabsElement}
            </div>
        )
    }
}
