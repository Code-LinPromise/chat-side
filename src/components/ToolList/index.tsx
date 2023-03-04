import React, {useEffect} from 'react';
import s from "./style.module.scss"
import ChatItem from "../ChatItemList/ChatItem";
type TooList={
    IconName:IconType,
    title:string,
    ClickEvent?: (e: React.MouseEvent<HTMLLIElement>)=>void
}
type Props= {
    updateShow: (e: React.MouseEvent<HTMLLIElement>) => void
}
const TooList = (props:Props) => {
    const ToolName:TooList |TooList[]=[
        {IconName:"delete" as IconType,title:"Clear conversations"},
        {IconName:"dark" as IconType,title:"Light mode",ClickEvent:props.updateShow}
    ]
    useEffect(()=>{

    },[])
    return (
        <ul className={s.wrapper}>
            {
                ToolName.map((item,index)=>{
                    return <li onClick={(e)=>item.ClickEvent?.(e)} key={index}>
                        <ChatItem name={item.IconName} title={item.title} />
                    </li>

                })
            }
        </ul>
    );
};

export default TooList;