import React from "react"
import styles from "./styles.scss"

import Button from "../Button"
import LoaderHorizontal from "../../loader/LoaderHorizontal"


export default class SubmitButton extends React.Component {
    render(){

        // Properties
        const { busy, disabled, children } = this.props;

        return (
            <Button type="submit" {...this.props} disabled={busy || disabled} hideLabel={busy} hideIcon={busy}>
                {busy ? (
                    <div className={styles.loader}>
                        <LoaderHorizontal />
                    </div>
                ) : null}

                {children}
            </Button>
        )
    }
}
