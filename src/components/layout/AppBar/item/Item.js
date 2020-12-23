import React from "react"
import PropTypes from "prop-types"
import styles from "./styles.scss"
import { Clickable } from "../../../button/Clickable/index"

export const Item = (props) => {
    return (
        <Clickable {...props} className={styles.item}>
            <div className={styles.wrapper}>
                {props.children}
            </div>
        </Clickable>
    )
}

Item.propTypes = {
    placeLeft: PropTypes.bool,
    placeRight: PropTypes.bool
};
