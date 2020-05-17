import React from "react"
import styles from "./styles.scss"

import { Button } from "../Button"
import { Row } from "../../grid/Row"
import { Col } from "../../grid/Col"


export class ConfirmActionButton extends React.Component {

    state = {
        promptConfirm: false
    };

    render(){

        // Properties
        const { label, question, onConfirm, size } = this.props;

        // Variables
        const { promptConfirm } = this.state;

        return (
            <div className={styles.base}>
                {promptConfirm ? (
                    <div className={styles.prompt}>
                        <div className={styles.question}>
                            {question}
                        </div>
                        <Row gutter="small">
                            <Col span={12}>
                                <Button block size={size} icon="check" iconColor="success" onClick={() => {this.setState({promptConfirm: false}, onConfirm)}}>
                                    Yes
                                </Button>
                            </Col>
                            <Col span={12}>
                                <Button block size={size} icon="close" iconColor="error" onClick={() => this.setState({promptConfirm: false})}>
                                    No
                                </Button>
                            </Col>
                        </Row>
                    </div>
                ) : (
                    <Button size={size} labelColor="error" className={styles.button} block onClick={() => this.setState({promptConfirm: true})}>
                        {label}
                    </Button>
                )}
            </div>
        )
    }
}
