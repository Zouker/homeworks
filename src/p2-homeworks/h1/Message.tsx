import React from 'react'
import classes from './Message.module.css';

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={classes.message}>
            <div className={classes.wrapper}>
                <div className={classes.avatar}>
                    <img src={props.avatar}/>
                </div>
                <div className={classes.text}>
                    <div className={classes.name}>{props.name}</div>
                    {props.message}
                    <div className={classes.time}>{props.time}</div>
                </div>
            </div>
        </div>
    )
}

export default Message
