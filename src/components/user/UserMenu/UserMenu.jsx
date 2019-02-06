import React from "react"
import styles from "./styles.scss"

import Avatar from "../../misc/Avatar"
import CardUserHead from "../../card/CardUserHead"
import PopOver from "../../nav/PopOver"


export default class UserMenu extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            showPop: false
        };
    }


    render(){

        // Properties
        const { name, email, picture, children } = this.props;

        // Variables
        const { showPop } = this.state;

        return (
            <div className={styles.base}>

                {/* Avatar */}
                <Avatar onClick={() => this.setState({showPop: !showPop})} imageUrl={picture} />

                {/* Pop over */}
                <PopOver
                    distance={18}
                    visible={showPop}
                    onClose={() => this.setState({showPop: false})}
                    padding="none"
                    arrowColor="accent"
                >
                    <CardUserHead picture={picture} name={name} email={email} />
                    <div className={styles.frame}>
                        {children}
                    </div>
                </PopOver>

            </div>
        )
    }
}
