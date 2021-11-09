import React from "react";
import { Toolbar } from "../../navigation/Toolbar";
import { ButtonGroup } from "../../button/ButtonGroup";
import { Button } from "../../button/Button";
import { language } from "./constants";

export const CropTools = ({ onApply, onCancel, setCropZone }) => {
    return (
        <Toolbar>
            <Toolbar.Item grow>
                <ButtonGroup>
                    <Button icon="resolution" size="small" onClick={() => setCropZone(1)}>
                        1:1
                    </Button>
                    <Button icon="resolution" size="small" onClick={() => setCropZone(16 / 9)}>
                        16:9
                    </Button>
                    <Button icon="resolution" size="small" onClick={() => setCropZone(9 / 16)}>
                        9:16
                    </Button>
                </ButtonGroup>
            </Toolbar.Item>
            <Toolbar.Item divideLeft>
                <ButtonGroup>
                    <Button
                        responsive
                        title={language.cancel}
                        icon="close"
                        iconColor="error"
                        size="small"
                        onClick={onCancel}
                    >
                        {language.cancel}
                    </Button>
                    <Button
                        responsive
                        title={language.apply}
                        icon="check"
                        iconColor="success"
                        size="small"
                        onClick={onApply}
                    >
                        {language.apply}
                    </Button>
                </ButtonGroup>
            </Toolbar.Item>
        </Toolbar>
    );
};
