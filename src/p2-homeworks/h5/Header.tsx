import React, {useState} from 'react'
import {NavLink} from 'react-router-dom';
import s from './Header.module.css'

function Header() {
    const [buttonIsClicked, setButtonIsClicked] = useState(false)

    const buttonHandler = () => buttonIsClicked ? setButtonIsClicked(false) : setButtonIsClicked(true)

    return (
        <div className={s.container}>
            <div className={`${s.wrapper} ${(buttonIsClicked) ? s.buttonIsNotClickedClicked : s.buttonIsClicked}`}>
                <NavLink className={s.menuItem} to={'/pre-junior'}>PreJunior</NavLink>
                <NavLink className={s.menuItem} to={'/junior'}>Junior</NavLink>
                <NavLink className={s.menuItem} to={'/junior-plus'}>JuniorPlus</NavLink>
                <button onClick={buttonHandler}
                     className={`${s.menuButton} 
                     ${(buttonHandler)
                         ? s.buttonIsClicked
                         : s.buttonIsNotClicked}`}
                ></button>
            </div>
        </div>
    )
}

export default Header
