import React, {ButtonHTMLAttributes} from 'react'
import './style.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLInputElement>{
    name:string
}

const Button: React.FunctionComponent<ButtonProps> = (props) => {
    return(
        <div >
            <div className="botoes">
            <button type="submit" id={props.name}>{props.name}</button>
            
            </div>
        </div>
    );
}

export default Button