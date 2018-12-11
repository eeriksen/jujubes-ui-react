import React from "react"
import classNames from "classnames"
import styles from "./styles.scss"

import layoutActions from "../../../utils/layoutActions"

import MenuButton from "../../button/MenuButton"
import DotsButton from "../../button/DotsButton"


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
                        <div className={styles.text}>
                            {title}
                        </div>
                    </div>
                    <div className={styles.right}>
                        <DotsButton onClick={() => layoutActions.toggleSubBar()} active={subBarActive} />
                    </div>
                </div>
                <div className={styles.subBar}>
                    <div className={styles.left}>
                        {React.Children.toArray(children).filter((c) => c.props.placeLeft)}
                    </div>
                    <div className={styles.right}>
                        {React.Children.toArray(children).filter((c) => c.props.placeRight)}
                    </div>
                </div>
            </div>
        )
    }
}
