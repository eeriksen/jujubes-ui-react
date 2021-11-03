import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./ConfirmActionButton.scss";

import { Button } from "../Button";
import { Row } from "../../grid/Row";
import { Col } from "../../grid/Col";
import { PopupYesNo } from "../../notify";

export const ConfirmActionButton = (props) => {
    const { label, size, busy, fill, silent, icon } = props;
    const [promptConfirm, setPromptConfirm] = useState(false);
    return (
        <div
            className={classNames(styles.base, {
                [styles.silent]: silent
            })}
        >
            {promptConfirm ? (
                <ConfirmPrompt {...props} onClose={() => setPromptConfirm(false)} />
            ) : (
                <Button
                    fill={fill}
                    size={size}
                    color={silent && "silent"}
                    labelColor="error"
                    icon={icon}
                    iconColor="error"
                    className={styles.button}
                    onClick={() => setPromptConfirm(true)}
                    busy={busy}
                >
                    {label}
                </Button>
            )}
        </div>
    );
};

const ConfirmPrompt = ({ popup, label, question, size, lang, onClose, onConfirm }) => {
    return popup ? (
        <PopupYesNo title={label} onNo={onClose} onYes={() => onClose() | onConfirm()}>
            {question}
        </PopupYesNo>
    ) : (
        <div className={styles.prompt}>
            <div className={styles.question}>{question}</div>
            <Row gutter={["small"]}>
                <Col span={12}>
                    <Button
                        fill
                        size={size}
                        icon="check"
                        iconColor="success"
                        onClick={() => {
                            onClose();
                            onConfirm();
                        }}
                    >
                        {lang.yes}
                    </Button>
                </Col>
                <Col span={12}>
                    <Button fill size={size} icon="close" iconColor="error" onClick={onClose}>
                        {lang.no}
                    </Button>
                </Col>
            </Row>
        </div>
    );
};

ConfirmActionButton.defaultProps = {
    lang: {
        yes: "Yes",
        no: "No"
    },
    fill: true
};

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
    size: PropTypes.oneOf(["small", "big"]),

    /**
     * Override yes/no labels
     */
    lang: PropTypes.object,

    /**
     * Display confirmation as a popup
     */
    popup: PropTypes.bool,

    /**
     * Busy indicator
     */
    busy: PropTypes.bool,

    /**
     * Button should fill with of container
     */
    fill: PropTypes.bool
};
