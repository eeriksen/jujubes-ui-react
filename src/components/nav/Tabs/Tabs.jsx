import React from "react"
import classNames from "classnames"
import styles from "./styles.scss"
import { withRouter } from "react-router-dom"
import ScrollableArea from "../../layout/ScrollableArea"


import Clickable from "../../button/Clickable"
import Icon from "../../graphic/Icon"

class Tabs extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            activeKey: null
        };
    }

    componentWillMount(){
        this._handlePropChanges(this.props);
    }

    componentWillReceiveProps(nextProps){
        this._handlePropChanges(nextProps);
    }

    _handlePropChanges = (props) => {
        this.setState({
           activeKey: props.activeKey
        });
    };


    /**
     * Handle table click
     */
    _handleTabClick = (pane) => {

        if(pane.props.link){
            this.props.history.replace(pane.props.link);
        }

        if(this.props.onChange){
            this.props.onChange(parseInt(pane.key, 10));
        }
    };


    /**
     * RENDER
     */
    render(){

        // Variables
        const { activeKey } = this.state;

        // Properties
        const { popupMode, history } = this.props;

        // Current path
        const url = history.location.pathname;

        // Tab panes
        let panes = this.props.children;


        // If only one element, create an array
        if(panes.constructor !== Array){
            let paneArray = [];
            paneArray.push(panes);
            panes = paneArray;
        }

        // Classes
        const baseClasses = classNames(styles.base, {
            [styles.popupMode]: popupMode
        });

        return (
            <div className={baseClasses}>

                {/* Tabs */}
                <div className={styles.tabs}>
                    <ScrollableArea>
                        <div className={styles.wrapper}>
                            {panes && panes.map((pane) => {

                                const tabIsActive = pane.props.link ? pane.props.link === url : parseInt(pane.key, 10) === activeKey;

                                const tabClasses = classNames(styles.tab, {
                                   [styles.active]: tabIsActive
                                });

                                return (
                                    <Clickable key={pane.key} className={tabClasses} onClick={() => this._handleTabClick(pane)}>

                                        {/* Icon */}
                                        {pane.props.icon ? (
                                            <Icon name={pane.props.icon} className={styles.icon} />
                                        ) : null}

                                        {/* Label */}
                                        {pane.props.label ? (
                                            <span className={styles.label}>
                                                {pane.props.label}
                                            </span>
                                        ) : null}


                                    </Clickable>
                                )
                            })}
                        </div>
                    </ScrollableArea>
                </div>

                {/* Tab panes */}
                {panes.filter((pane) => pane.props.link ? pane.props.link === url : parseInt(pane.key, 10) === activeKey)[0]}

            </div>
        )
    }
}

export default withRouter(Tabs);
