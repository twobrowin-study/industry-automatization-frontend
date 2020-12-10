import React from 'react'
import fileIcon from '../../img/icons/file-icon.svg'

export default class File extends React.Component {
    constructor(props) {
        super(props)
    }

    showFileData = (e) => {
        let file = {name: this.props.element.name}
        this.props.showFilePanel(file)
    }

    render() {
        return(
                <div className='file' onClick={this.showFileData}>
                    <div><img src={fileIcon} className='icon'/></div>
                    <div className='file-info'>{this.props.element.name}</div>
                </div>
        )
    }
}