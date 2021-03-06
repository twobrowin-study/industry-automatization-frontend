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
        name: "",
        email: ""
    }

    logout = (e) => {
        e.preventDefault()
        this.props.keycloak.logout()
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
                    <div className='navbar-button' onClick={this.logout}>Выйти</div>
                </div>
            </div>
        )
    }
}