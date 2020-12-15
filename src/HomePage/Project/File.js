import React from 'react'
import fileIcon from '../../img/icons/file-icon.svg'
import {getData} from "../../lib/api";
import Loading from '../../Loading/Loading'

export default class File extends React.Component {
    constructor(props) {
        super(props)
        this.getFile = this.getFile.bind(this)
        this.getFile()
    }

    state = {
        loadFile: false
    }

    showFileData = (e) => {
        let url = 'query/v1/tasks/?processInstanceId=' + this.props.element.id + "&status=CREATED"
        getData(url, this.props.keycloak.token).then((dataFile) => {
            url = 'query/v1/tasks/?processInstanceId=' + this.props.element.id + "&status=COMPLETED"
            getData(url, this.props.keycloak.token).then((data) => {

                this.props.myContext.showPanel('right', {
                    type: 'file', file: {
                        tasks: dataFile._embedded ? dataFile._embedded.tasks : [],
                        name: this.state.file.value,
                        createTime: this.state.file.createTime,
                        lastUpdatedTime: this.state.file.lastUpdatedTime,
                        completedTasks: data._embedded ? data._embedded.tasks : [],
                        fileId : this.props.element.id,
                    },
                })
            })
        })
    }

    getFile() {
        let url = 'query/v1/process-instances/' + this.props.element.id + "/variables/?name=name"
        getData(url, this.props.keycloak.token).then((data) => this.setState({
            file: data._embedded.variables[0],
            loadFile: true
        }));
    }

    render() {
        if (this.state.loadFile) {
            return (
                <div className='file' onClick={this.showFileData}>
                    <div><img src={fileIcon} className='icon'/></div>
                    <div className='file-info'>{this.state.file.value}</div>
                </div>
            )
        }

        if (!this.state.loadFile) {
            return (<Loading />)
        }
        return (
            <div>default return</div>
        )
    }
}