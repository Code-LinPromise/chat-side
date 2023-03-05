import React from 'react';
import Icon from "../Icon";
import Details from "../Details";
import s from "./style.module.scss"

type Props={
    IconName:IconType,
    title:string,
    detailsList:string[]
}
const ChatPadList = (props:Props) => {
    return (
        <div className={s.wrapper}>
            <div className={s.title}>
                <span><Icon name={props.IconName} isBlack={true}/></span>
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