import React from 'react'
import File from './File'
import SubProject from './SubProject'

export default class ProjectListItem extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let element
        if(this.props.element.type == 'file') {
            element = <File element={this.props.element} showFilePanel={this.props.showFilePanel}/>
        }
        else if (this.props.element.type == 'subproject') {
            element = <SubProject element={this.props.element} showFilePanel={this.props.showFilePanel}/>
        }
        return(
            <div className='project-list-item'>
                {element}
            </div>
        )
    }
}