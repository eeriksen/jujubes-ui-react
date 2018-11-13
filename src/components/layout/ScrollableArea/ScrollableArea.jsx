import React from "react"

import 'react-perfect-scrollbar/dist/css/styles.css'
import PerfectScrollbar from "react-perfect-scrollbar"

export default class ScrollableArea extends React.Component {

    componentDidMount() {

        if( typeof window !== 'undefined' ) {
            window.addEventListener('resize', this._handleResize, false);
        }

    }

    componentWillUnmount() {
        if( typeof window !== 'undefined' ) {
            window.removeEventListener('resize', this._handleResize, false);
        }
    }

    _handleResize = () => {
        this.areaRef.updateScroll();
    };

    render(){
        return (
            <PerfectScrollbar ref={(r) => this.areaRef = r}>
                {this.props.children}
            </PerfectScrollbar>
        )
    }
}
