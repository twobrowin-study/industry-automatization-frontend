import React from 'react'
import ProjectList from './ProjectList'
import {getData} from "../../lib/api";
import Loading from '../../Loading/Loading'
import '../../css/Project/Project.css'

export default class Project extends React.Component {
    constructor(props) {
        super(props)
        this.getProject = this.getProject.bind(this)
        this.getProject()
        this.props.myContext.closePanel('left')
        this.props.myContext.closePanel('right')
    }

    state = {
        projectId: this.props.projectId,
        loadProject: false
    }

    backToListProject = (e) => {
        e.preventDefault()
        this.props.myContext.changePage('listProject')
    }

    getProject() {
        let url = 'query/v1/process-instances/' + this.props.projectId + "/variables/?name=name"
        getData(url, this.props.keycloak.token).then((data) => {
                this.setState({
                    project: data._embedded.variables[0]
                })
            return data._embedded.variables[0];
            }
        ).then((projectData) => {
            url = 'query/v1/process-instances?parentId=' + this.props.projectId
            getData(url, this.props.keycloak.token).then((data) => {
                    this.setState({
                        project_list: data._embedded ? data._embedded.processInstances : [],
                        loadProject: true
                    })
                return projectData
                }
            ).then((projectData) => {
                url = 'query/v1/tasks/?processInstanceId=' + this.props.projectId + "&status=CREATED"
                getData(url, this.props.keycloak.token).then((data) => {
                    this.props.myContext.showPanel('left', {
                        type: 'project', project: {
                            tasks: data._embedded ? data._embedded.tasks : [],
                            name: projectData.value,
                            createTime: projectData.createTime,
                            lastUpdatedTime: projectData.lastUpdatedTime,
                            projectId: this.props.projectId
                        },
                    })
                })
            })
        })

    }

    render() {
        let content;
        if (this.state.loadProject) {
            return (<div className='project'>
                <div className='project-navbar'>
                    <div className='project-name'>
                        <h2>Название проекта:</h2>
                        <h2>{this.state.project.value}</h2>
                    </div>
                    <div>
                        <div className='backbutton' onClick={this.backToListProject}>К списку проектов</div>
                    </div>
                </div>
                <ProjectList list={this.state.project_list} showFilePanel={this.props.showFilePanel}
                             keycloak={this.props.keycloak} myContext={this.props.myContext}/>
            </div>)
        }

        if (!this.state.loadProject) {
            return (<Loading />)
        }
        return (
            <div>default return</div>
        )
    }
}