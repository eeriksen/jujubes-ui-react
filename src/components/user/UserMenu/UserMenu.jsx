import React from "react"
import classNames from "classnames"
import ReactDOM from "react-dom"
import styles from "./styles.scss"

import Avatar from "../../misc/Avatar"
import Arrow from "../../graphic/Arrow"
import CardUserHead from "../../card/CardUserHead"
import CardContent from "../../card/CardContent"

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

        // Variables
        const { rightOffset, showPop } = this.state;

        // Classes
        const popClasses = classNames(styles.pop, {
            [styles.visible]: showPop
        });

        return (
            <div className={styles.base}>

                {/* Avatar */}
                <Avatar onClick={() => this.setState({showPop: !showPop})} imageUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3EZo1PcTFDG3aIcjMFz4ZntDmRo8FW8D0x7dyAOT1QCZuwZYY"} />

                {/* Popup */}
                <div ref={(r) => this.popRef = r} className={popClasses}>
                    <Arrow color="primary" className={styles.arrow} />
                    <div className={styles.content} style={{left: `${rightOffset}px`}}>
                        <CardUserHead picture={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3EZo1PcTFDG3aIcjMFz4ZntDmRo8FW8D0x7dyAOT1QCZuwZYY"} name="Donald Trump" email="donald.trump@whitehouse.gov.us" />
                        <CardContent>
                            Heisann
                        </CardContent>
                    </div>
                </div>

            </div>
        )
    }
}
