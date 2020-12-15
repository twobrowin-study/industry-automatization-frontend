import React from 'react'
import '../../css/LeftPanel.css'

export default class ProjectGroupPanel extends React.Component{
    constructor(props) {
        super(props)
        this.props.keycloak.loadUserInfo().then(userInfo => {
            this.setState({
                group:userInfo.groups[0]
            })
        })
    }
    state = {

    }

    createProject = (e) => {
        e.preventDefault()

        this.props.myContext.showModal({type: 'create-project', group: this.state.group})
    }

    render() {
        return(
            <div className='left-panel-content'>
                <div><h2>Панель управления проектами группы:&nbsp; {this.state.group}</h2></div>
                <div className='interaction'>
                    <div>Действия:</div>
                    <div className='task' onClick={this.createProject}>Создать</div>
                </div>
            </div>
        )
    }
}