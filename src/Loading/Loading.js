import React from 'react'
import loadingGif from '../img/loading.gif'

export default class Loading extends React.Component {
    render() {
        return(
            <div><img src={loadingGif}/></div>
        )
    }
}