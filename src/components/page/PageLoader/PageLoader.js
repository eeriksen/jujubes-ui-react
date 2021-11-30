import React from "react"
import { Spinner } from "../../loader/Spinner";
import styles from "./PageLoader.scss"

export const PageLoader = ({children}) => {
    return (
        <div className={styles.base}>
            <div className={styles.loader}>
                <div className={styles.box}>
                    <Spinner />
                </div>
            </div>
        </div>
    )
};
