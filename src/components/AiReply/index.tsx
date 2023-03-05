import React from 'react';
import s from "./style.module.scss"
import Icon from "../Icon";

const AiReply = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.block}>
                <span><Icon name="user"/></span>
                <div className={s.font}>
                    总之，数字货币的应用非常广泛，从金融服务、区块链技术应用、物联网应用等多个方面都可以看到数字货币的身影。随着数字货币技术的不断发展和完善，它的应用场景也将不断扩大和丰富。
                </div>
            </div>
        </div>
    );
};

export default AiReply;