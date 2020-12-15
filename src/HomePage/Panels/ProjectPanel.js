import React from 'react'
import FormatDate from '../../Utility/FormatDate'
import '../../css/LeftPanel.css'

export default class ProjectGroup extends React.Component{

    onClick(name, id) {
        if (name == 'Создать') {
            let taskId = id
            this.props.myContext.showModal({type: 'create-object-of-project', projectId: this.props.element.projectId, taskId: taskId})
        }
    }
    render() {
        return(
            <div className='left-panel-content'>
                <div><h2>Панель управления проектом</h2></div>
                <div className='left-panel-group'>
                    <div>Имя проекта:</div>
                    <div>{this.props.element.name}</div>
                </div>
                <div className='left-panel-group'>
                    <div>Время создания:</div>
                    <FormatDate date={this.props.element.createTime}/>
                </div>
                <div className='left-panel-group'>
                    <div>Время последнего изменения</div>
                    <FormatDate date={this.props.element.lastUpdatedTime}/>
                </div>
                <div className='interaction'>
                    <div>Действия:</div>
                    {this.props.element.tasks.map((value) =>
                        <div className='task' onClick={this.onClick.bind(this, value.name, value.id)}>{value.name}</div>
                    )
                    }
                </div>
            </div>
        )
    }
}