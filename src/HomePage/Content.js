import React from 'react'
import ListProject from "./ListProject";
import Project from './Project/Project';

export default class Content extends React.Component {
    constructor(props) {
        super(props)
    }
    state = {
        keycloak: this.props.keycloak,
    }

    componentDidMount() {
        if(this.props.content == 'project') {
            this.props.myContext.closePanel('left')
            this.props.myContext.showPanel('left', {type: "project", project: {}})
        }
    }

    render() {
        let content
        if (this.props.content === 'listProject') {
            content = <ListProject myContext={this.props.myContext} keycloak={this.props.keycloak}/>
        }
        else if(this.props.content === 'project') {
            content = (<Project projectId={this.props.projectId} showFilePanel={this.props.showFilePanel} keycloak={this.props.keycloak} myContext={this.props.myContext}/>)
        }
        return(
            <div>
                {content}
            </div>
        )
    }
}