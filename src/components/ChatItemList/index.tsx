import React from 'react';
import s from "./style.module.scss"
import ChatItem from "./ChatItem";
const ChatItemList = () => {
    const array=["2sadadadadadadadadadadsdasdasdasd","2","2","2","2","2","2","2","2","2","2","2",]
    return (
        <div className={s.wrapper}>
            <ul>
                {
                    array.map((item,index)=>{
                        return <li><ChatItem title="2sadadadadadadadadadadsdasdasdasd"/></li>
                    })
                }
            </ul>
        </div>
    );
};

export default ChatItemList;