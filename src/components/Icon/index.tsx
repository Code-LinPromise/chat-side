import React from 'react';
import s from "./style.module.scss"

type Props={
    name:IconType,
    ClickEvent?:(e:MouseEvent)=>void,
}
const Icon = (props:Props) => {
    return (
        <svg className={s.svg} onClick={()=>props?.ClickEvent}>
            <use xlinkHref={`#${props.name}`}></use>
        </svg>
    );
};

export default Icon;