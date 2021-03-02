import React, {useState} from "react"
import PropTypes from "prop-types"
import styles from "./ConfirmActionButton.scss"

import { Button } from "../Button"
import { Row } from "../../grid/Row"
import { Col } from "../../grid/Col"


export const ConfirmActionButton = (props) => {
    const { label, question, onConfirm, size, lang } = props;
    const [promptConfirm, setPromptConfirm] = useState(false);
    return (
        <div className={styles.base}>
            {promptConfirm ? (
                <div className={styles.prompt}>
                    <div className={styles.question}>
                        {question}
                    </div>
                    <Row gutter={["small"]}>
                        <Col span={12}>
                            <Button fill block size={size} icon="check" iconColor="success" onClick={() => { setPromptConfirm(false); onConfirm(); }}>
                                {lang.yes}
                            </Button>
                        </Col>
                        <Col span={12}>
                            <Button fill block size={size} icon="close" iconColor="error" onClick={() => setPromptConfirm(false)}>
                                {lang.no}
                            </Button>
                        </Col>
                    </Row>
                </div>
            ) : (
                <Button fill size={size} labelColor="error" className={styles.button} block onClick={() => setPromptConfirm(true)}>
                    {label}
                </Button>
            )}
        </div>
    )
}

ConfirmActionButton.defaultProps = {
    lang: {
        yes: "Yes",
        no: "No"
    }
}

ConfirmActionButton.propTypes = {

    /**
     * Button label
     */
    label: PropTypes.string,

    /**
     * Question to confirm
     */
    question: PropTypes.string,

    /**
     * Confirm (yes) handler
     */
    onConfirm: PropTypes.func,

    /**
     * Size of buttons
     */
    size: PropTypes.oneOf(['small', 'big']),

    /**
     * Override yes/no labels
     */
    lang: PropTypes.object
}
