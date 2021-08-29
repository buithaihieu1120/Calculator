import React from 'react';
import '../Calculator/Button.css';

type Props={
    label?:string;
    content?:string;
    onClick?:()=>void


}
const Button:React.FC<Props>=({label,content,onClick})=>{
    return (
        <button className={content} onClick={onClick}>{label}</button>
    );
}
export default Button;