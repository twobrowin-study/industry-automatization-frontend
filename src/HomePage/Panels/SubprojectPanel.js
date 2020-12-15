import React from 'react'
import FormatDate from '../../Utility/FormatDate'
import '../../css/RightPanel.css'

export default class SubprojectPanel extends React.Component {
    onClick(name, id) {
        if (name == 'Создат') {
            let taskId = id
            this.props.myContext.showModal({type: 'create-file-on-subproject', subprojectId: this.props.element.subprojectId, taskId: taskId})
        }
    }
    render() {
        return(
            <div className='right-panel-content'>
                <div><h2>Панель управления подпроектом</h2></div>
                <div className='right-panel-group'>
                    <div>Имя подпроекта:</div>
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
                    <div>Действия</div>
                    {this.props.element.tasks.map((value) =>
                        <div className='task' onClick={this.onClick.bind(this, value.name, value.id)}>{value.name}</div>
                    )
                    }
                </div>
            </div>
        )
    }
}