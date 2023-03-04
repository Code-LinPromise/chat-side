import React from 'react';
import  s from "./style.module.scss"
type Props={
    details:string
}
const Details = (props:Props) => {
    return (
        <div className={s.wrapper}>
            {props.details}
        </div>
    );
};

export default Details;