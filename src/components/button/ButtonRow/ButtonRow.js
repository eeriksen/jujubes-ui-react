import React from "react"
import styles from "./ButtonRow.scss"


export const ButtonRow = ({children}) => {
    return (
        <div className={styles.base}>
            {React.Children.map(children, (child, index) => (
                <div key={index} className={styles.item}>
                    {child}
                </div>
            ))}
        </div>
    )
};
