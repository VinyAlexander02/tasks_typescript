import React from 'react'
import style from './Button.module.scss'

class Button extends React.Component<{btnName: string}> {
    render() {
        return(
            <button className={style.button}> {this.props.btnName} </button>
        )
    }
}

export default Button;