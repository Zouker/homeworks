import React from 'react'
import s from './AlternativeMessage.module.css';

type AlternativeMessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function AlternativeMessage(props: AlternativeMessagePropsType) {
    return (
        <div className={s.message}>
            <div className={s.content}>
                <div className={s.name}>{props.name}</div>
                <div className={s.text}>{props.message}</div>
                <div className={s.time}>{props.time}</div>
            </div>
            <div className={s.angle}/>
            <img src={props.avatar} alt={'avatar'} className={s.avatar}/>
        </div>
    )
}

export default AlternativeMessage
