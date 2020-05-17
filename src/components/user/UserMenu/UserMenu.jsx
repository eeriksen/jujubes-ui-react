import React, {useState} from "react"
import styles from "./styles.scss"

import { Clickable } from "../../button/Clickable"
import { CardUserHead } from "../../card/CardUserHead"
import { PopOver } from "../../nav/PopOver"
import { Icon } from "../../graphic/Icon"


export const UserMenu = (props) => {
    const { picture, alt } = props;
    const [visible, setVisible] = useState(false);
    return (
        <div className={styles.base}>
            <PopOver
                visible={visible}
                content={renderContent(props)}
                arrowColor="primary"
                size="large"
                onClose={() => setVisible(false)}>

                <Clickable block className={styles.picture} onClick={() => setVisible(!visible)}>
                    {picture ? (
                        <img alt={alt} src={picture} />
                    ) : (
                        <div className={styles.placeholder}>
                            <Icon name="user" />
                        </div>
                    )}
                </Clickable>
            </PopOver>
        </div>
    )
};


const renderContent = ({picture, email, name, children}) => {
    return (
        <React.Fragment>
            <CardUserHead picture={picture} name={name} email={email} />
            <div className={styles.frame}>
                {children}
            </div>
        </React.Fragment>
    )
};
