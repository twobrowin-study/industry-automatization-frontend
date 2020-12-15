import React from 'react'
import FormatDate from '../../Utility/FormatDate'
import '../../css/RightPanel.css'
import {getData, postData} from "../../lib/api";

export default class FilePanel extends React.Component {
    constructor(props) {
        super(props)
    }

    state = {
        fileId: this.props.element.fileId
    }


    onClick(name, id) {
        if (name == 'Изменить') {
            this.claimFile(id)
        }

        if (name == 'Освободить') {
            this.releaseFile(id)
        }
    }

    claimFile(id) {
        let url = 'rb/v1/tasks/' + id + '/claim'
        let form = {}
        postData(url, this.props.keycloak.token, form).then((response) => {
            if (response.ok) {
                this.props.myContext.showModal({
                    type: 'result',
                    panelData: {header: "Захват файла", text: "Захват файла прошел успешно"}
                })
            }
        })
    }

    releaseFile() {
        let url = 'query/v1/tasks/?processInstanceId=' + this.props.element.fileId + '&status=ASSIGNED'
        getData(url, this.props.keycloak.token).then((response) => {
                url = 'rb/v1/tasks/' + response._embedded.tasks[0].id + '/release'
                let form = {}
                postData(url, this.props.keycloak.token, form).then((response) => {
                    if (response.ok) {
                        this.props.myContext.showModal({
                            type: 'result',
                            panelData: {header: "Освобождение файла", text: "Освобождение файла прошло успешно"}
                        })
                    }
                })
        })
    }


    render() {
        return (
            <div className='right-panel-content'>
                <div><h2>Панель управления файлом</h2></div>
                <div className='right-panel-group'>
                    <div>Название файла:</div>
                    <div>{this.props.element.name}</div>
                </div>
                <div className='right-panel-group'>
                    <div>Время создания:</div>
                    <FormatDate date={this.props.element.createTime}/>
                </div>
                <div className='right-panel-group'>
                    <div>Время последнего обновления:</div>
                    <FormatDate date={this.props.element.lastUpdatedTime}/>
                </div>
                <div className='interaction'>
                    <div>Действия:</div>
                    {this.props.element.tasks.map((value) =>
                        <div className='task' onClick={this.onClick.bind(this, value.name, value.id)}>{value.name}</div>
                    )
                    }
                    <div className='task' onClick={this.onClick.bind(this, 'Освободить')}>Освободить</div>
                </div>
            </div>
        )
    }
}