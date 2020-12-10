import React from 'react'
import ProjectList from './ProjectList'

export default class Project extends React.Component{
    state = {
        project: this.props.project
    }
    render() {
        return(
            <div className='project'>
               <div>
                   <h2>Name: {this.state.project.name}</h2>
               </div>
                <ProjectList list={this.state.project.list} showFilePanel={this.props.showFilePanel}/>
            </div>
        )
    }
}