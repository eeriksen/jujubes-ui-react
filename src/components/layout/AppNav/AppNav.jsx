import React from "react"
import classNames from "classnames"
import styles from "./styles.scss"

import layoutActions from "../../../utils/layoutActions"

import { Clickable } from "../../button/Clickable"
import { ScrollableArea } from "../ScrollableArea"

export class AppNav extends React.Component {

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
        const { logo, title, children } = this.props;

        // Variables
        const { active } = this.state;

        // Classes
        const baseClasses = classNames(styles.base, {
            [styles.isActive]: active
        });

        return (
            <div className={baseClasses}>
                <div className={styles.content}>

                    {/* Logo */}
                    <div className={styles.logo}>
                        <div className={styles.wrapper}>
                            {logo}
                        </div>
                    </div>

                    {/* Menu content */}
                    <ScrollableArea>

                        {/* Header */}
                        {title ? (
                            <div className={styles.header}>
                                <div className={styles.title}>
                                    {title}
                                </div>
                            </div>
                        ) : null}

                        {/* Menu */}
                        <div className={styles.menu}>
                            {children}
                        </div>

                    </ScrollableArea>

                    {/* Fade*/}
                    <div className={styles.fade} />
                </div>

                {/* Overlay */}
                <Clickable onClick={() => layoutActions.toggleNav()} className={styles.overlay} />
            </div>
        )
    }
}
