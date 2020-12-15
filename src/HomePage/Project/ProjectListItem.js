import React from 'react'
import File from './File'
import SubProject from './SubProject'

export default class ProjectListItem extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let element
        if(this.props.element.processDefinitionKey == 'Process_t1-1M1g1T') {
            element = <File element={this.props.element} showFilePanel={this.props.showFilePanel} keycloak={this.props.keycloak} myContext={this.props.myContext}/>
        }
        else if (this.props.element.processDefinitionKey == 'Process_i5ugxdvpu') {
            element = <SubProject element={this.props.element} showFilePanel={this.props.showFilePanel} keycloak={this.props.keycloak} myContext={this.props.myContext}/>
        }
        return(
            <div className='project-list-item'>
                {element}
            </div>
        )
    }
}