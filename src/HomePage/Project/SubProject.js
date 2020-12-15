import React from 'react'
import arrowDown from '../../img/icons/arrow-down.svg'
import arrowUp from '../../img/icons/arrow-up.svg'
import File from './File'
import projectIcon from '../../img/icons/project-icon.svg'
import {getData} from "../../lib/api";
import Loading from '../../Loading/Loading'

export default class SubProject extends React.Component {
    constructor(props) {
        super(props)
        this.getSubProject = this.getSubProject.bind(this)
        this.getSubProject()

    }

    state = {
        isOpen: false,
        isLoaded: false
    }

    arrowClick = (e) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    getSubProject() {
        let url = 'query/v1/process-instances/' + this.props.element.id + "/variables/?name=name"
        getData(url, this.props.keycloak.token).then((data) => {this.setState({
            subproject: data._embedded.variables[0]
        })
            this.getFile()
        });
    }

    getFile() {
        let url = 'query/v1/process-instances?parentId=' + this.props.element.id
        getData(url, this.props.keycloak.token).then((data) => this.setState({
            list: data._embedded ? data._embedded.processInstances : [],
            isLoaded: true
        }));
    }

    showSubprojectData = (e) => {
        let url = 'query/v1/tasks/?processInstanceId=' + this.props.element.id + "&status=CREATED"
        getData(url, this.props.keycloak.token).then((data) => {
            this.props.myContext.showPanel('right', {
                type: 'subproject', subproject: {
                    tasks: data._embedded ? data._embedded.tasks : [],
                    name: this.state.subproject.value,
                    createTime: this.state.subproject.createTime,
                    lastUpdatedTime: this.state.subproject.lastUpdatedTime,
                    subprojectId: this.props.element.id
                },
            })
        })
    }

    render() {
        let arrow
        if(this.state.isOpen) {
            arrow = <img className='icon-arrow' src={arrowUp} onClick={this.arrowClick}/>
        }
        else {
            arrow = <img className='icon-arrow' src={arrowDown} onClick={this.arrowClick}/>
        }

        if(this.state.isLoaded) {
            return(
                <div className='subproject'>
                    <div className='header'>
                        <div className='project-info-and-icon' onClick={this.showSubprojectData}>
                            <div><img src={projectIcon} className='icon'/></div>
                            <div className='project-info'>{this.state.subproject.value}</div>
                        </div>
                        <div className='arrow'>
                            {arrow}
                        </div>
                    </div>
                    {this.state.isOpen && (<div className='list-files'>
                            {this.state.list.map((value) =>
                                <div className='list-files-item'>
                                    <File element={value} showFilePanel={this.props.showFilePanel} keycloak={this.props.keycloak} myContext={this.props.myContext}/>
                                </div>
                            )}</div>
                    )}
                </div>
                )
        }

        if(!this.state.isLoaded) {
            return(<Loading/>)
        }
        return(
            <div>default return</div>
        )
    }
}