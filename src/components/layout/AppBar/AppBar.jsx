import React from "react"
import classNames from "classnames"
import styles from "./styles.scss"

import layoutActions from "../../../utils/layoutActions"

import Item from "./Item"
import Icon from "../../graphic/Icon"
import MenuButton from "../../button/MenuButton"


export default class AppBar extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            subBarActive: false
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
                subBarActive: state.subBarActive
            });
        });
    };


    render(){

        // Properties
        const { title, children } = this.props;

        // Variables
        const { subBarActive } = this.state;

        // Classes
        const baseClasses = classNames(styles.base, {
            [styles.subBarActive]: subBarActive
        });

        return (
            <div className={baseClasses}>
                <div className={styles.mainBar}>
                    <div className={styles.left}>
                        <MenuButton onClick={() => layoutActions.toggleNav()} />
                    </div>
                    <div className={styles.center}>
                        {title}
                    </div>
                    <div className={styles.right}>
                        <Item onClick={() => layoutActions.toggleSubBar()}>
                            <Icon name="menu-dots" />
                        </Item>
                    </div>
                </div>
                <div className={styles.subBar}>
                    {children}
                </div>
            </div>
        )
    }
}
