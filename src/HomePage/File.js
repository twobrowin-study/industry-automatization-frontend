import React from 'react'
import '../css/File.css'

export default class File extends React.Component {
    render() {
        return(
            <div className='file'>
                <p>{this.props.element.name}</p>
            </div>
        )
    }
}