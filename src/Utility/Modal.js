import React from 'react'
import {postData} from '../lib/api'
import closeIcon from '../img/icons/close-icon.png'
import '../css/Modal.css'

export default class Modal extends React.Component {
    constructor(props) {
        super(props)
    }

    state = {
        type: this.props.content.type
    }

    onChange = (e) => {
        e.preventDefault()
        const {name, value} = e.target
        this.setState({[name]: value})
    }

    createProject = (e) => {
        e.preventDefault()
        let url = 'rb/v1/process-instances'
        let form = {
            processDefinitionKey: this.props.myContext.processDefinition.find(element => element.name == 'project-model').key,
            payloadType: "StartProcessPayload",
            variables: {
                initiator_group: this.props.content.group,
                name: this.state.projectName
            },
            commandType:"StartProcessInstanceCmd"
        }
        postData(url, this.props.keycloak.token, form).then((response) => {
            if(response.ok) {
                this.setState({
                    type: 'result',
                    header: 'Создание проекта',
                    text: 'Создание проекта ' + this.state.projectName + ' прошло успешно.'
                })
            }
        })
    }

    componentDidMount() {
        this.setState({
            header: this.props.content.header,
            text: this.props.content.text
        })
    }

    createObject = (e) => {
        e.preventDefault()
        let url = 'rb/v1/tasks/' + this.props.content.taskId + '/claim'
        let form = {}
        postData(url, this.props.keycloak.token, form).then((response) => {
            if(response.ok) {
                url = 'rb/v1/process-instances/' + this.props.content.projectId + '/variables'
                form = {
                    payloadType: "SetProcessVariablesPayload",
                    variables: {
                        creation_type: this.state.createdObject,
                        creation_name: this.state.subprojectOrFileName
                    },
                }
                postData(url, this.props.keycloak.token, form).then((response) => {
                    if(response.ok) {
                        url = 'rb/v1/tasks/' + this.props.content.taskId  + '/complete'
                        form = {
                            payloadType: "CompleteTaskPayload",
                            variables: {
                                file: "File 2"
                            }
                        }
                        postData(url, this.props.keycloak.token, form).then((response) => {
                            if(response.ok) {
                                this.setState({
                                    type: 'result',
                                    header: 'Создание подпроекта или файла',
                                    text: 'Создание проекта или файла' + this.state.subprojectOrFileName + ' прошло успешно.'
                                })
                            }
                        })
                    }
                })
            }
        })
    }

    createFileInSubproject = (e) => {
        e.preventDefault()
        let url = 'rb/v1/tasks/' + this.props.content.taskId + '/claim'
        let form = {}
        postData(url, this.props.keycloak.token, form).then((response) => {
            if(response.ok) {
                url = 'rb/v1/process-instances/' + this.props.content.subprojectId + '/variables'
                form = {
                    payloadType: "SetProcessVariablesPayload",
                    variables: {
                        creation_name: this.state.filename
                    },
                }
                postData(url, this.props.keycloak.token, form).then((response) => {
                    if(response.ok) {
                        url = 'rb/v1/tasks/' + this.props.content.taskId  + '/complete'
                        form = {
                            payloadType: "CompleteTaskPayload",
                            variables: {
                                file: "File 2"
                            }
                        }
                        postData(url, this.props.keycloak.token, form).then((response) => {
                            if(response.ok) {
                                this.setState({
                                    type: 'result',
                                    header: 'Создание подпроекта или файла',
                                    text: 'Создание проекта или файла' + this.state.subprojectOrFileName + ' прошло успешно.'
                                })
                            }
                        })
                    }
                })
            }
        })
    }

    closeModal = (e) => {
        e.preventDefault()
        this.props.myContext.closeModal();
    }

    render() {
        if(this.state.type == 'create-project') {
            let {projectName} = this.state
            return(
                <div className='modal'>
                    <div className='modal-body'>
                        <div className='close-icon'>
                            <img src={closeIcon} onClick={this.closeModal}/>
                        </div>
                        <div className='header'>
                            <h2>Создать проект</h2>
                        </div>
                        <div className='content'>
                            <div>
                                Введите название проекта
                            </div>
                            <div>
                                <input value={projectName} name="projectName" onChange={this.onChange}/>
                            </div>
                            <div>
                                <button onClick={this.createProject}>Создать</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

        if(this.state.type == 'create-object-of-project') {
            let {subprojectOrFileName, createdObject} = this.state
            return(
                <div className='modal'>
                    <div className='modal-body'>
                        <div className='close-icon'>
                            <img src={closeIcon} onClick={this.closeModal}/>
                        </div>
                        <div className='header'>
                            <h2>Создать подпроект или файл</h2>
                        </div>
                        <div className='content'>
                            <div>
                                Выберите тип создаваемого объекта проекта
                            </div>
                            <div>
                                <select value={createdObject} name='createdObject' onChange={this.onChange}>
                                    <option value="subproject">Подпроект</option>
                                    <option value="file">Файл</option>
                                </select>
                            </div>
                            <div>
                                Введите имя объекта
                            </div>
                            <div>
                                <input value={subprojectOrFileName} name="subprojectOrFileName" onChange={this.onChange}/>
                            </div>
                            <div>
                                <button onClick={this.createObject}>Создать</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

        if(this.state.type == 'create-file-on-subproject') {
            let {filename} = this.state
            return(
                <div className='modal'>
                    <div className='modal-body'>
                        <div className='close-icon'>
                            <img src={closeIcon} onClick={this.closeModal}/>
                        </div>
                        <div className='header'>
                            <h2>Создать файл</h2>
                        </div>
                        <div className='content'>
                            <div>Введите имя файла</div>
                            <div><input value={filename} name="filename" onChange={this.onChange}/></div>
                            <div><button onClick={this.createFileInSubproject}>Создать</button></div>
                        </div>
                    </div>
                </div>
            )
        }



        if(this.state.type == 'result') {
            return (
                <div className='modal'>
                    <div className='modal-body'>
                        <div className='header'>
                            <h2>{this.state.header}</h2>
                        </div>
                        <div className='content'>
                            <div>
                                <div>{this.state.text}</div>
                            </div>
                            <div>
                                <button onClick={this.closeModal}>Ок</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }


        return (
            <div>Default return</div>
        )
    }
}