import React from "react"
import PropTypes from "prop-types"
import styles from "./styles.scss"


export default class Column extends React.Component {
    render(){
        return (
            <div className={styles.column}></div>
        )
    }
}

Column.propTypes = {
    field: PropTypes.string
};
