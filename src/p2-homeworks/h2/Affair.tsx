import React from 'react'
import {AffairType} from './HW2';
import s from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => props.deleteAffairCallback(props.affair._id)// need to fix

    const priorityClass = s.item + ' ' + s[props.affair.priority]

    return (
        <div className={s.content}>
           <div className={s.item}>{props.affair.name}</div> <div className={priorityClass}>{props.affair.priority}</div>

            <button className={s.buttonX} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
