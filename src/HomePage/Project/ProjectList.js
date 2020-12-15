import React from 'react'
import ProjectListItem from './ProjectListItem'
import '../../css/Project/ProjectList.css'

export default class ProjectList extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return(
                <div className='project-list'>
                    {this.props.list.map((value) =>
                        <ProjectListItem element={value} showFilePanel={this.props.showFilePanel} keycloak={this.props.keycloak} myContext={this.props.myContext}/>
                    )
                    }
                </div>
        )
    }
}