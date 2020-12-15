import React from 'react'
import projectIcon from '../img/icons/project-icon.svg'
import {getData} from "../lib/api";
import Loading from '../Loading/Loading'

export default class ListProjectItem extends React.Component{
    constructor(props) {
        super(props)
        this.getProject = this.getProject.bind(this)
        this.getProject()
    }

    state = {
        isLoaded: false
    }

    onClick = (e) => {
        this.props.myContext.changePage('project', this.props.element.id);
    }

    getProject() {
        let url = 'query/v1/process-instances/' + this.props.element.id + "/variables/?name=name"
        getData(url, this.props.keycloak.token).then((data) => {
                this.setState({
                    project: data._embedded.variables[0],
                    isLoaded : true
                })
            }
        )
    }

    render() {
        if (this.state.isLoaded) {
            return(
                <div className='list-project-item' onClick={this.onClick}>
                    <div className='list-project-item-content'>
                        <div><img src={projectIcon} className='icon'/></div>
                        <div>
                            {this.state.project.value}
                        </div>
                        <div>
                            {this.props.element.initiator}
                        </div>
                    </div>
                </div>
            )
        }

        if(!this.state.isLoaded) {
            return(
                <Loading />
            )
        }
        return(
            <div> default return</div>
        )
    }
}