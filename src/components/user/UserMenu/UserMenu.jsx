import React from "react"
import classNames from "classnames"
import ReactDOM from "react-dom"
import styles from "./styles.scss"

import ClickOutside from "../../action/ClickOutside"
import Avatar from "../../misc/Avatar"
import Arrow from "../../graphic/Arrow"
import Overlay from "../../layout/Overlay"
import CardUserHead from "../../card/CardUserHead"

const POP_WIDTH = 300;
const POP_GUTTER = 10;


export default class UserMenu extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            showPop: false,
            rightOffset: 0
        };
    }

    componentDidMount(){
        this._calculatePosition();
    }

    _calculatePosition = () => {
        const $pop = ReactDOM.findDOMNode(this.popRef);
        const dim = $pop.getBoundingClientRect();
        const rightOffset = window.innerWidth - (dim.x + (POP_WIDTH / 2)) - POP_GUTTER;
        this.setState({
            rightOffset: rightOffset < 0 ? rightOffset : 0
        });
    };

    render(){

        // Properties
        const { name, email, picture, children } = this.props;

        // Variables
        const { rightOffset, showPop } = this.state;

        // Classes
        const popClasses = classNames(styles.pop, {
            [styles.visible]: showPop
        });

        return (
            <ClickOutside onClickOutside={() => this.setState({showPop: false})} className={styles.base}>

                {/* Avatar */}
                <Avatar onClick={() => this.setState({showPop: !showPop})} imageUrl={picture} />

                {/* Popup */}
                <div className={popClasses}>
                    <Overlay className={styles.overlay} visible={showPop} onClick={() => this.setState({showPop: false})} />

                    <div ref={(r) => this.popRef = r} className={styles.box}>
                        <Arrow color="accent" className={styles.arrow} />
                        <div className={styles.content} style={{left: `${rightOffset}px`}}>
                            <CardUserHead picture={picture} name={name} email={email} />
                            <div className={styles.frame}>
                                {children}
                            </div>
                        </div>
                    </div>
                </div>

            </ClickOutside>
        )
    }
}
