import React, {useState} from 'react'
import {NavLink} from 'react-router-dom';
import './HW5.css'

function Header() {

    return (
        <div className={'dropdown'}>
          <button className={'dropbtn'}></button>
            <div className={'dropdown-content'}>
                <NavLink to={'/pre-junior'}>PreJunior</NavLink>
                <NavLink to={'/junior'}>Junior</NavLink>
                <NavLink to={'/junior-plus'}>JuniorPlus</NavLink>
            </div>
        </div>

    )
}

export default Header
