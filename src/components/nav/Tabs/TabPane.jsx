import React from "react"
import classNames from "classnames"
import styles from "./styles.scss"


export default class TabPane extends React.Component {
    render(){

        // Properties
        const { children, className } = this.props;

        const classes = classNames(styles.pane, className);

        return children ? (
            <div className={classes}>
                {children}
            </div>
        ) : null;
    }
}
