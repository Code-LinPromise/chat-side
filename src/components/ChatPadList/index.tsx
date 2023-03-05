import React from 'react';
import Icon from "../Icon";
import Details from "../Details";
import s from "./style.module.scss"
import {useShowBlack} from "../../store/useShowBlack";

type Props={
    IconName:IconType,
    title:string,
    detailsList:string[]
}
const ChatPadList = (props:Props) => {
    const showBlack=useShowBlack(state=>state.showBlack)

    return (
        <div className={s.wrapper}>
            <div className={s.title}>
                <span><Icon name={props.IconName} isBlack={showBlack}/></span>
                <span className={s.font}>{props.title}</span>
            </div>
            <ul>
                {
                    props.detailsList.map((item,index)=>{
                        return <li key={index}>
                            <Details details={item} />
                        </li>
                    })
                }
            </ul>
        </div>
    );
};

export default ChatPadList;