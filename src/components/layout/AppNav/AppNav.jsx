import React from "react"
import classNames from "classnames"
import styles from "./styles.scss"

import layoutActions from "../../../utils/layoutActions"

import Header from "./Header"
import Clickable from "../../button/Clickable"
import ScrollableArea from "../ScrollableArea"

export default class AppNav extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            active: false
        };

        this._initialize();
    }

    componentWillUnmount(){
        if(this.layoutSubscription){
            layoutActions.unsubscribe(this.layoutSubscription);
        }
    }

    _initialize = () => {
        this.layoutSubscription = layoutActions.subscribe((state) => {
            this.setState({
                active: state.navActive
            });
        });
    };



    render(){

        // Properties
        const { logo, children } = this.props;

        // Variables
        const { active } = this.state;

        // Classes
        const baseClasses = classNames(styles.base, {
            [styles.active]: active
        });

        return (
            <div className={baseClasses}>

                {/* Content pane */}
                <div className={styles.content}>
                    <Header logo={logo} />
                    <div className={styles.menu}>
                        <div className={styles.fade} />
                        <ScrollableArea>
                            {children}
                        </ScrollableArea>
                    </div>
                </div>

                {/* Overlay */}
                <Clickable onClick={() => layoutActions.toggleNav()} className={styles.overlay} />

            </div>
        )
    }
}
