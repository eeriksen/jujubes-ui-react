import React from "react"
import styles from "./styles.scss"

import Page from "../Page"
import Spinner from "../../loader/Spinner"

export default class PageLoader extends React.Component {
    render(){
        return (
            <Page className={styles.base}>
                <Spinner size="large" />
            </Page>
        )
    }
}
