import React from 'react'
import logo from '../img/logo.svg'
import '../css/NavBar.css'

export default class NavBar extends React.Component {

    render() {
        return (
            <div className='navbar'>
                <div className='navbar-item'>
                    <img className='navbar-logo' src={logo}/>
                </div>
                <div className='navbar-item'>
                    <div>Имя пользователя</div>
                    <div>Выйти</div>
                </div>
            </div>
        )
    }
}