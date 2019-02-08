import React from "react"
import classNames from "classnames"
import styles from "./styles.scss"

import Spinner from "../../loader/Spinner"

export default class Checklist extends React.Component {


    _handleItemToggle = (item) => {
        if(this.props.onItemToggle){
            this.props.onItemToggle(item);
        }
    };

    render(){

        // Properties
        const { children } = this.props;

        // Iterate items
        const childrenWithProps = React.Children.map(children,
            (child) => React.cloneElement(child, {
                onChange: (item) => this._handleItemToggle(item)
            })
        );

        // Classes
        const classes = classNames(styles.base);

        return (
            <div className={classes}>

                {/* Loader */}
                {this.props.busy ? (
                    <div className={styles.loader}>
                        <Spinner className={styles.spinner} />
                    </div>
                ) : null}

                {childrenWithProps}
            </div>
        )
    }
}
