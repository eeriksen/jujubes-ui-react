import React from "react"
import classNames from "classnames"
import styles from "./styles.scss"


export default class Logo extends React.Component {

    render(){

        // Properties
        const { className, height } = this.props;

        // Classes
        const classes = classNames(styles.base, {
            [styles.customHeight]: height
        } ,className);

        return (
            <div className={classes} style={height ? {height: `${height}px`} : null}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 297"><g><polyline points="97.4 235.3 199.5 235.3 199.5 296.9 173.5 266.6 39.3 266.6 97.4 235.3" /><path d="M0.5 295.8C3.4 254 25.1 216.5 59 184.5 79.4 164.9 115.3 138.7 125.1 131.1 134.3 123.8 143.7 115.4 143.7 98.9 143.7 78.5 127.5 62.5 106.8 62.5L106.8 31.2C147.2 31.2 175.4 63.1 175.4 98.5 175.4 125.6 164.3 143.2 129.4 168 89 197.4 80.6 204.9 64.7 223 49.5 240.6 42.3 255.2 39.3 266.6L0.5 295.8Z" /><path d="M8.6 99.4C8.6 42.9 52.6 0.5 106.8 0.5L106.8 31.2C90.5 31.2 55.6 43.8 44.1 78.5L42.7 91.8 8.6 99.4Z" /><polygon points="72.7 99.4 8.6 99.4 44.1 78.5" /></g></svg>
            </div>
        )
    }
}
