import React from "react"

import Button from "../../button/Button/index"
import { Popup, PopupTitle, PopupContent, PopupButtons } from "../Popup"
import Text from "../../typography/Text/index"


export default class PopupMessage extends React.Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    _onOk = () => {
        if(this.props.onOk){
            this.props.onOk();
        }
    };


    render(){

        // Properties
        const { title, message, type, visible, label } = this.props;

        return (
            <Popup type={type} visible={visible}>
                <PopupTitle>
                    {title}
                </PopupTitle>
                <PopupContent>
                    <Text size="medium">
                        {message}
                    </Text>
                </PopupContent>
                <PopupButtons>
                    <Button size="big" kind={type || "primary"} icon="check" onClick={this._onOk}>
                        {label || 'Ok, got it!'}
                    </Button>
                </PopupButtons>
            </Popup>
        )
    }
}
