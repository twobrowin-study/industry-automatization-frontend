import React from 'react'
import logo from '../img/logo.svg'
import '../css/NavBar.css'

export default class NavBar extends React.Component {
    constructor(props) {
        super(props)
        this.props.keycloak.loadUserInfo().then(userInfo => {
            this.setState({
                name: userInfo.name, email: userInfo.email
            })
        })
    }

    state = {

    }

    render() {
        return (
            <div className='navbar'>
                <div className='navbar-item'>
                    <img className='navbar-logo' src={logo}/>
                    <div>Производство</div>
                </div>
                <div className='navbar-item'>
                    <div>{this.state.name}</div>
                    <div>{this.state.email}</div>
                    <div>Выйти</div>
                </div>
            </div>
        )
    }
}