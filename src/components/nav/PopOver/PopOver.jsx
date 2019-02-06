import React from "react"
import classNames from "classnames"
import styles from "./styles.scss"

import ClickOutside from "../../action/ClickOutside"
import Arrow from "../../graphic/Arrow"
import Overlay from "../../layout/Overlay"
import ReactDOM from "react-dom";

export default class PopOver extends React.Component {

    state = {
        popStyles: null,
        arrowStyles: null,
        place: null
    };

    componentDidMount(){
        this._calculatePosition();
    }

    shouldComponentUpdate(nextProps, nextState){
        return this.props.visible !== nextProps.visible;
    }

    /**
     * Calculate the position of the pop over
     */
    _calculatePosition = () => {
        const { distance } = this.props;
        const $element = ReactDOM.findDOMNode(this.baseRef);
        if(!$element){
            return;
        }
        const windowWidth = window.innerWidth;
        const windowHeight= window.innerHeight;
        const dim = $element.getBoundingClientRect();

        const rightDistance = windowWidth - dim.left - dim.width;
        const leftDistance = dim.left;
        const topDistance = dim.top;
        const bottomDistance = windowHeight - dim.top - dim.height;

        let popStyles = {};
        let arrowStyles = {};
        let place = {};

        // Vertical position
        if(bottomDistance > topDistance){
            popStyles.top = `${dim.height + distance}px`;
            place = "top";
        }else {
            popStyles.bottom = `${dim.height + distance}px`;
            place = "bottom";
        }

        // Horizontal position
        if(leftDistance > rightDistance){
            popStyles.right = `0px`;
            arrowStyles.right = `${dim.width / 2}px`;
        }else {
            popStyles.left = `0px`;
            arrowStyles.left = `${dim.width / 2}px`;
        }

        this.setState({
            popStyles, arrowStyles, place
        });
    };



    render(){

        // Properties
        const { visible, children, padding, onClose, arrowColor } = this.props;

        // Variables
        const { popStyles, arrowStyles, place } = this.state;

        // Classes
        const baseClasses = classNames(styles.base, {
            [styles.visible]: visible,
            [styles.paddingNone]: padding === "none",
            [styles.placeTop]: place === "top",
            [styles.placeBottom]: place === "bottom"
        });

        console.log("Pop visible", visible);

        return (
            <React.Fragment>
                <ClickOutside enabled={visible} onClickOutside={onClose} className={baseClasses} ref={(r) => this.baseRef = r}>

                    {/* Action menu */}
                    <div className={styles.pop} style={popStyles}>
                        <Arrow color={arrowColor || "contrast"} className={styles.arrow} style={arrowStyles} />
                        <div className={styles.content}>
                            {children}
                        </div>
                    </div>

                </ClickOutside>
                <Overlay className={styles.overlay} visible={visible} />
            </React.Fragment>
        );
    }
}


PopOver.defaultProps = {
    distance: 24
};
