import React from "react"
import "./styles.scss"

import 'react-tippy/dist/tippy.css'
import { Tooltip as Tippy } from 'react-tippy'


export class Tooltip extends React.Component {
    render(){

        // Properties
        const { title, position, trigger, disabled, arrow, children } = this.props;

        return (
            <Tippy
                title={title}
                position={position}
                trigger={trigger}
                arrow={arrow}
                disabled={disabled}
            >
                {children}
            </Tippy>
        )
    }
}


Tooltip.defaultProps = {
    title: "This is a tooltip",
    position: "top",
    trigger: "mouseenter focus",
    arrow: true,
    disabled: false
};
