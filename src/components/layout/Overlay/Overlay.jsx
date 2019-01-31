import React from "react"
import classNames from "classnames"
import styles from "./styles.scss"

import scrollUtils from "../../../utils/scrollUtils"
import Clickable from "../../button/Clickable"


export default class Overlay extends React.Component {

    componentDidUpdate(){
        if(this.props.visible){
            scrollUtils.disableBodyScroll();
        }else {
            scrollUtils.enableBodyScroll();
        }
    }

    componentWillUnmount() {
        scrollUtils.enableBodyScroll();
    }

    render(){

        // Properties
        const { visible, className, onClick } = this.props;

        // Classes
        const baseClasses = classNames(styles.base, {
            [styles.visible]: visible
        }, className);

        return (
            <Clickable className={baseClasses} onClick={onClick} />
        )
    }
}
