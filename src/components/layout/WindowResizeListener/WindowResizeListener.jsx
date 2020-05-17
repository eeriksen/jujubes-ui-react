import React from "react"


export class WindowResizeListener extends React.Component {

    componentDidMount() {
        if( typeof window !== 'undefined' ) {
            window.addEventListener('resize', this.handleResize, false);
        }
    }

    componentWillUnmount() {
        if( typeof window !== 'undefined' ) {
            window.removeEventListener('resize', this.handleResize, false);
        }
    }

    handleResize(event) {
        if( typeof this.props.onResize !== 'undefined' ) {
            this.props.onResize(event);
        }
    }

    render() {
        return (
            <div style={{
                display: 'none',
                visibility: 'hidden'
            }} />
        );
    }
}
