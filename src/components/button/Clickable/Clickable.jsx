import React from "react"

export default class Clickable extends React.Component {
    render(){

        // Properties
        const { block, children, link, onClick, className } = this.props;

        const tagType = block ? 'div' : 'span';
        return React.createElement(tagType, {
            children, link, onClick, className
        });
    }
}
