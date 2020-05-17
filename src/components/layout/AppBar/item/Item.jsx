import React from "react"
import PropTypes from "prop-types"
import styles from "./styles.scss"


import { Clickable } from "../../../button/Clickable/index"

export class Item extends React.Component {
    render(){
        return (
            <Clickable {...this.props} className={styles.item}>
                <div className={styles.wrapper}>
                    {this.props.children}
                </div>
            </Clickable>
        )
    }
}

Item.propTypes = {
    placeLeft: PropTypes.bool,
    placeRight: PropTypes.bool
};
