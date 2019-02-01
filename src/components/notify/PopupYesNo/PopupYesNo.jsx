import React from "react"

import Button from "../../button/Button"
import Text from "../../typography/Text"
import { Popup, PopupTitle, PopupButtons, PopupContent } from "../Popup"


export default class PopupYesNo extends React.Component {

    _onYes = () => {
        if(this.props.onYes){
            this.props.onYes();
        }
    };

    _onNo = () => {
        if(this.props.onNo){
            this.props.onNo();
        }
    };


    render(){

        // Properties
        const { title, children, visible } = this.props;

        return (
            <Popup visible={visible}>
                <PopupTitle>
                    {title}
                </PopupTitle>
                <PopupContent>
                    <Text size="medium">
                        {children}
                    </Text>
                </PopupContent>
                <PopupButtons>
                    <Button
                        size="big"
                        icon="check"
                        iconColor="success"
                        onClick={this._onYes}
                        onEnterKey={this._onYes}>
                        Ja
                    </Button>
                    <Button
                        size="big"
                        icon="close"
                        iconColor="error"
                        onClick={this._onNo}>
                        Nei
                    </Button>
                </PopupButtons>
            </Popup>
        )
    }
}
