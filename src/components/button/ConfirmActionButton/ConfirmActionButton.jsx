import React from "react"
import styles from "./styles.scss"

import Button from "../Button"
import Paragraph from "../../typography/Paragraph"
import Row from "../../grid/Row"
import Col from "../../grid/Col"


export default class ConfirmActionButton extends React.Component {

    state = {
        promptConfirm: false
    };

    render(){

        // Properties
        const { label, question, onConfirm, size, cyp } = this.props;

        // Variables
        const { promptConfirm } = this.state;

        return (
            <div className={styles.base} data-cyp={cyp}>
                {promptConfirm ? (
                    <div className={styles.frame}>
                        <Paragraph>
                            {question}
                        </Paragraph>
                        <Row>
                            <Col span={12}>
                                <Button block size={size} icon="check" color="success" onClick={() => {this.setState({promptConfirm: false}, onConfirm)}}>
                                    Yes
                                </Button>
                            </Col>
                            <Col span={12}>
                                <Button block size={size} icon="close" color="error" onClick={() => this.setState({promptConfirm: false})}>
                                    No
                                </Button>
                            </Col>
                        </Row>
                    </div>
                ) : (
                    <Button size={size} labelColor="error" block onClick={() => this.setState({promptConfirm: true})}>
                        {label}
                    </Button>
                )}
            </div>
        )
    }
}
