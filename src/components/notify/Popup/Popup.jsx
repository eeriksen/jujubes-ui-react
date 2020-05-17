import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import styles from "./styles.scss"

import scrollUtils from "../../../utils/scrollUtils"
import { Overlay } from "../../layout/Overlay"
import { Clickable } from "../../button/Clickable"
import { Icon } from "../../graphic/Icon"


export class Popup extends React.Component {

    componentDidMount(){

        // Disable document scrolling
        scrollUtils.disableBodyScroll();
    }

    componentWillUnmount() {

        // Re-enable document scolling
        scrollUtils.enableBodyScroll();
    }



    /**
     * Handle click outside popup, on overlay
     * @param e
     * @private
     */
    _handleClickOutside = (e) => {

        // Properties
        const { onClickOutside, onClose } = this.props;

        if(onClickOutside){
            onClickOutside(e);
        }else if(onClose){
            onClose();
        }
    };


    /**
     * RENDER
     * @returns {XML}
     */
    render(){

        // Properties
        const { visible, type, size, onClose, boxClassName } = this.props;

        // Check if visible
        if(!visible){
            return null;
        }

        // Classes
        const classes = classNames(styles.base, {
            [styles.successType]: type === "success",
            [styles.errorType]: type === "error",
            [styles.sizeAuto]: size === "auto"
        });

        // Box classes
        const boxClasses = classNames(styles.box, boxClassName);

        return (
            <div className={classes} onClick={(e) => this._handleClickOutside(e)}>
                <div ref="box" className={boxClasses} onClick={(e) => {e.stopPropagation()}}>

                    {/* Close button */}
                    {onClose ? (
                        <Clickable onClick={onClose} className={styles.close} cyp="popupClose">
                            <Icon className={styles.icon} name="close" />
                        </Clickable>
                    ) : null}

                    {this.props.children}
                </div>
                <Overlay visible={visible} />
            </div>
        )
    }
}


Popup.propTypes = {
    type: PropTypes.string
};

Popup.defaultProps = {
    visible: true
};
