import React from "react"
import classNames from "classnames"
import styles from "./styles.scss"

import layoutActions from "../../../utils/layoutActions"

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
        const { logo, title, subtitle, children } = this.props;

        // Variables
        const { active } = this.state;

        // Classes
        const baseClasses = classNames(styles.base, {
            [styles.isActive]: active
        });

        return (
            <div className={baseClasses}>

                {/* Content pane */}
                <div className={styles.content}>

                    {/* Header */}
                    <div className={styles.header}>
                        <div className={styles.logo}>
                            {logo}
                        </div>
                        <div className={styles.title}>
                            {title}

                            {subtitle ? (
                                <div className={styles.subtitle}>
                                    {subtitle}
                                </div>
                            ) : null}
                        </div>
                    </div>

                    <ScrollableArea>

                        {/* Menu */}
                        <div className={styles.menu}>
                            {children}
                        </div>

                    </ScrollableArea>
                    <div className={styles.fade} />
                </div>

                {/* Overlay */}
                <Clickable onClick={() => layoutActions.toggleNav()} className={styles.overlay} />

                {/* Flick */}
                <div className={styles.flick} />

            </div>
        )
    }
}
