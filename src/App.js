import React from 'react'
import HomePage from './HomePage/HomePage'

export default class App extends React.Component {
    constructor(props) {
        super(props)
    }

    state = {
        page: 'home',
        keycloak: window.keycloak
    }


    componentDidMount() {
        if(this.state.keycloak) {
            this.state.keycloak.init({ onLoad: 'login-required' }).then(authenticated => {
                this.setState({
                    keycloak: window.keycloak, authenticated: authenticated
                })
                setInterval(() => {this.state.keycloak.updateToken(5).success(function(refreshed) {
                }).error(function() {
                    window.keycloak.logout();
                })},60 * 1000)

            })
        }
    }

    render() {
            if(this.state.keycloak) {
                if(this.state.authenticated){
                    return(<HomePage keycloak={this.state.keycloak}/>)
                }
                else {
                    return(<div>this.state.authenticated - false</div>)
                }
            }
            else {
                return(<div>Сервис недоступен, попробуйте позже</div>)
            }
    }
}