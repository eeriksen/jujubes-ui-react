import React from "react"
import styles from "./Page.scss"


export const Page = ({children}) => {
    let mainBox = [];
    let topBox = [];
    React.Children.map(children, (child) => {
        if(child.type.name === "PageCrumbs"){
            topBox.push(child);
        }else {
            mainBox.push(child);
        }
    });

    return (
        <React.Fragment>
            {topBox ? (
                <div className={styles.topBox}>
                    {topBox}
                </div>
            ) : null}
            <div className={styles.mainBox}>
                {mainBox}
            </div>
        </React.Fragment>
    )
};
