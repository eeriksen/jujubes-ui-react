import React from "react"
import style from "./style.scss"


export class Filler extends React.Component {
    render(){
        return (
            <div className={style.base}>
                {this.props.children}
            </div>
        )
    }
}
