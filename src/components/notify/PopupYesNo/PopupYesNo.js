import React from "react";
import PropTypes from "prop-types";
import { Button } from "../../button/Button";
import { Text } from "../../typography/Text";
import { Popup, PopupTitle, PopupFooter, PopupContent } from "../Popup";
import { Row } from "../../grid/Row";
import { Col } from "../../grid/Col";

export const PopupYesNo = ({ title, children, onYes, onNo, visible, onClose, lang }) => {
    return (
        <Popup visible={visible} onClose={onClose}>
            <PopupTitle>{title}</PopupTitle>
            <PopupContent>
                <Text size="medium">{children}</Text>
            </PopupContent>
            <PopupFooter>
                <Row gutter={["small"]}>
                    <Col span={12}>
                        <Button
                            icon="check"
                            color="success"
                            onClick={onYes}
                        >
                            {lang.yes}
                        </Button>
                    </Col>
                    <Col span={12}>
                        <Button
                            icon="close"
                            color="error"
                            onClick={onNo}
                        >
                            {lang.no}
                        </Button>
                    </Col>
                </Row>
            </PopupFooter>
        </Popup>
    );
};

PopupYesNo.defaultProps = {
    visible: true,
    lang: {
        yes: "Yes",
        no: "No"
    }
}

PopupYesNo.propTypes = {
    /**
     * Title of prompt
     */
    title: PropTypes.string,
    /**
     * Message / content of popup
     */
    children: PropTypes.any,
    /**
     * "Yes" click callback function
     */
    onYes: PropTypes.func,
    /**
     * "No" click callback function
     */
    onNo: PropTypes.func,
    /**
     * Handler for clicking close button
     */
    onClose: PropTypes.func,
    /**
     * Show/hide popup
     */
    visible: PropTypes.bool,
    /**
     * Override language
     */
    lang: PropTypes.object
};
