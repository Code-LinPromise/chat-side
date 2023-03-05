import React, {useEffect} from 'react';
import s from "./style.module.scss"
import {useShowBlack} from "../../store/useShowBlack";


type Props={
    name:IconType,
    ClickEvent?: (e: React.MouseEvent<SVGSVGElement>)=>void,
}
const Icon = (props:Props) => {
    const showBlack=useShowBlack(state=>state.showBlack)
    return (
        <svg className={showBlack?s.svgBlack:s.svgWhite} onClick={(e)=>props?.ClickEvent?.(e)}>
            <use xlinkHref={`#${props.name}`}></use>
        </svg>
    );
};

export default Icon;