import React, {useEffect} from 'react';
import s from "./style.module.scss"


type Props={
    name:IconType,
    ClickEvent?: (e: React.MouseEvent<SVGSVGElement>)=>void,
    isBlack?:boolean
}
const Icon = ({name,ClickEvent,isBlack=false}:Props) => {

    return (
        <svg className={isBlack?s.svgBlack:s.svgWhite} onClick={(e)=>ClickEvent?.(e)}>
            <use xlinkHref={`#${name}`}></use>
        </svg>
    );
};

export default Icon;