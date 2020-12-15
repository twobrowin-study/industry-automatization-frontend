import React from 'react'
import ListProjectItem from './ListProjectItem'
import '../css/ListProject.css'
import {getData} from "../lib/api";
import Loading from '../Loading/Loading'

export default class ListProject extends React.Component {
    constructor(props) {
        super(props)
        this.getProjects = this.getProjects.bind(this)
        this.getProjects()
        this.props.myContext.closePanel('left')
        this.props.myContext.closePanel('right')
        this.props.myContext.showPanel('left', {type: "project-group", projectgroup: {}})
    }

    state = {
        loadProjects: false
    }

    getProjects() {
        let url = 'query/v1/process-instances?status=RUNNING&processDefinitionName=project-model&page=0&size=20'
        getData(url, this.props.keycloak.token).then((data) => this.setState({
            projects: data._embedded.processInstances,
            loadProjects: true
        }));
    }


    render() {
        let content;
        if(this.state.loadProjects) {
            if(this.state.projects.length === 0) {
                content = <div>
                    <h2>Список проектов пуст</h2>
                </div>
            }
            else {
                content = <div className='list-project'>
                    {this.state.projects.map((value) =>
                        <ListProjectItem element={value} myContext={this.props.myContext} keycloak={this.props.keycloak}/>
                    )
                    }
                </div>
            }
        }

        if(!this.state.loadProjects) {
            content = <Loading />
        }
        return(
            <div>
                <h2>Список проектов:</h2>
                {content}
            </div>
        )
    }
}