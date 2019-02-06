import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ClickOutside extends Component {

    static propTypes = {
        onClickOutside: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.getContainer = this.getContainer.bind(this);
        this.isTouch = false
    }

    componentDidMount(){
        this._toggleEnabled(this.props.enabled);
    }

    componentDidUpdate(prevProps){
        if(this.props.enabled && !prevProps.enabled){
            this._toggleEnabled(true);
        } else if(!this.props.enabled && prevProps.enabled){
            this._toggleEnabled(false);
        }
    }

    /**
     * Toggle enabled
     * @param enabled
     * @private
     */
    _toggleEnabled = (enabled) => {
        if(enabled){
            document.addEventListener('touchend', this._handle, true);
            document.addEventListener('click', this._handle, true);
            document.addEventListener('scroll', this._handle, true);
        } else {
            document.removeEventListener('touchend', this._handle, true);
            document.removeEventListener('click', this._handle, true);
            document.removeEventListener('scroll', this._handle, true);
        }
    };

    /**
     * Handle
     * @param e
     * @private
     */
    _handle = (e) => {
        if (e.type === 'touchend') this.isTouch = true;
        if (e.type === 'click' && this.isTouch) return;
        e.stopPropagation();
        const { onClickOutside } = this.props;
        const el = this.container;
        if (el && !el.contains(e.target)) onClickOutside(e)
    };

    getContainer(ref) {
        this.container = ref
    }


    render() {
        const { children, enabled, onClickOutside, ...props } = this.props;
        return <div {...props} ref={this.getContainer}>{children}</div>;
    }
}
