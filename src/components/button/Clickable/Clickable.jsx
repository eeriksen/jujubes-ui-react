import React from "react"

export default class Clickable extends React.Component {
    render(){

        // Properties
        const { block, children, link, onClick } = this.props;

        const tagType = block ? 'div' : 'span';
        return React.createElement(tagType, {
            ...this.props
        });
    }
}
