import React from 'react'
import { IColor } from '../Interface/IColors';
import './less/Button.less';

type prop = {
    children: JSX.Element | string;
    outlineColor?: IColor;
    textColor?: IColor;
    widthLine?: number;
    className?:string;
    click?: Function
}

export const Button = ({ children,className , outlineColor = 'primary',textColor='white', widthLine = 2, click }: prop) => {

    return (
        <>
            <button onClick={(e)=>click===undefined?null:click(e)} className={'btn-generic'+ ` ${className===undefined?'':className}`} style={{borderColor:`var(--${outlineColor})`,borderWidth:widthLine}}>
                <span style={{color:`var(--${textColor})`}}>
                    {children}
                </span>
            </button>
        </>
    )
}
