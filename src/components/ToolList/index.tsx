import React from 'react';
import s from "./style.module.scss"
import ChatItem from "../ChatItemList/ChatItem";
type TooList={
    IconName:IconType,
    title:string
}
const TooList = () => {
    const ToolName:TooList |TooList[]=[
        {IconName:"delete" as IconType,title:"Clear conversations"},
        {IconName:"dark" as IconType,title:"Light mode"}
    ]
    return (
        <ul className={s.wrapper}>
            {
                ToolName.map((item,index)=>{
                    return <li>
                        <ChatItem name={item.IconName} title={item.title}/>
                    </li>

                })
            }
        </ul>
    );
};

export default TooList;