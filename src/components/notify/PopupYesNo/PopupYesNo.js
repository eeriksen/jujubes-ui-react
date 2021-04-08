import React from "react";
import PropTypes from "prop-types";
import { Button } from "../../button/Button";
import { Text } from "../../typography/Text";
import { Popup, PopupTitle, PopupFooter, PopupContent } from "../Popup";
import { ButtonRow } from "../../button/ButtonRow";

export const PopupYesNo = ({ title, children, onYes, onNo, visible, onClose, lang }) => {
    return (
        <Popup visible={visible} onClose={onClose}>
            <PopupTitle>{title}</PopupTitle>
            <PopupContent>
                <Text size="medium">{children}</Text>
            </PopupContent>
            <PopupFooter>
                <ButtonRow>
                    <Button icon="check" color="success" onClick={onYes}>
                        {lang.yes}
                    </Button>
                    <Button icon="close" iconColor="error" onClick={onNo}>
                        {lang.no}
                    </Button>
                </ButtonRow>
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
};

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
