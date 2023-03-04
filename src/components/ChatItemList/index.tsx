import React from 'react';
import s from "./style.module.scss"
import ChatItem from "./ChatItem";
const ChatItemList = () => {
    const array=[
        {title:"React是什么？"},
        {title:"React的特点是什么"},
        {title:"使用React最关键的优势是什么？"},
        {title:"React最大的限制(缺点)是什么？"},
        {title:"JSX是什么？"},
        {title:"浏览器为什么不能读取JSX？"},
        {title:"为什么要使用JSX？"},
        {title:"虚拟(Virtual)DOM 是什么？"},
        {title:" 基本知识; React 组件; React Redux; React 路由"},

    ]
    return (
        <div className={s.wrapper}>
            <ul>
                {
                    array.map((item,index)=>{
                        return <li key={index}><ChatItem title={item.title} name="chat"/></li>
                    })
                }
            </ul>
        </div>
    );
};

export default ChatItemList;