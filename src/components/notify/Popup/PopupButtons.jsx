import React from "react"
import classNames from "classnames"
import styles from "./styles.scss"


export default class PopupButtons extends React.Component {
    render(){

        let mainButton = null;
        let extraButton = null;

        React.Children.map(this.props.children, (child, index) => {
            const clonedChild = React.cloneElement(child, {
                className: classNames(child.props.className, styles.buttonElement)
            });

            if(index === 0){
                mainButton = clonedChild;
            }else if(index === 1){
                extraButton = clonedChild;
            }
        });

        const classes = classNames(styles.buttons, {
           [styles.twoButtons]: extraButton !== null
        });

        return (
            <div className={classes}>

                {mainButton ? (
                    <div className={styles.mainButton}>
                        {mainButton}
                    </div>
                ) : null}

                {extraButton ? (
                    <div className={styles.extraButton}>
                        {extraButton}
                    </div>
                ) : null}

            </div>
        )
    }
}
