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

    async getData(url,) {
        let result = await fetch(url, {
            method: 'GET'
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
               return data
            });

        console.log(result)
        return result
    }

    componentDidMount() {
        this.state.keycloak.init({ onLoad: 'login-required' }).then(authenticated => {
            this.setState({
                keycloak: window.keycloak, authenticated: authenticated
            })
        })
    }

    render() {
            if(this.state.keycloak) {
                if(this.state.authenticated){
                    return(<HomePage/>)
                }
                else {
                    return(<div>this.state.authenticated - false</div>)
                }
            }
            else {
                return(<div>this.state.keycloak -false</div>)
            }
    }
}