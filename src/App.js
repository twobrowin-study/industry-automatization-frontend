import React from 'react'
import HomePage from './HomePage/HomePage'

export default class App extends React.Component {
    constructor(props) {
        super(props)
    }

    state = {
        page: 'home'
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

    render() {
        return(
            <div>
                <HomePage/>
            </div>
        )
    }
}