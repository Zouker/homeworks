import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import styles from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId) // stop
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())  // setDate
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true) // show
    }
    const onMouseLeave = () => {
        setShow(false) // close
    }

    const stringTime = date.toLocaleTimeString(); //'Time' // fix with date
    const stringDate = date.toLocaleDateString(); //'Date' // fix with date

    return (
        <div className={styles.clock}>
            <div className={styles.time}
                 onMouseEnter={onMouseEnter}
                 onMouseLeave={onMouseLeave}
            >
                <span>{stringTime}</span>
            </div>

            {show && (
                <div className={styles.date}>
                    <span>{stringDate}</span>
                </div>
            )}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
