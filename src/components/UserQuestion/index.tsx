import React from 'react';
import  s from "./style.module.scss"
import {useParams} from "react-router-dom";
import Icon from "../Icon";

const UserQuestion = () => {
    const {details}=useParams()
    return (
        <div className={s.wrapper}>
            <div className={s.block}>
                <span><Icon name="user"/></span>
                <div className={s.font}>
                    {details}
                </div>
            </div>
        </div>
    );
};

export default UserQuestion;