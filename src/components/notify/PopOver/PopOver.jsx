import React from "react"
import styles from "./styles.scss"

import ReactPopover from "react-popover"


export default class PopOver extends React.Component {

    render(){

        // Properties
        const { children, visible, onClose } = this.props;

        return (
            <ReactPopover
                isOpen={visible}
                body={this._renderBody()}
                onOuterAction={onClose}
                className={styles.pop}
                tipSize={8}
            >
                {children}
            </ReactPopover>
        )
    }


    _renderBody(){

        // Properties
        const { body } = this.props;

        return (
            <div className={styles.body}>
                {body}
            </div>
        )
    }
}
