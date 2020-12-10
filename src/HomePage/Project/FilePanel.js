import React from 'react'
import '../../css/FilePanel.css'

export default class FilePanel extends React.Component {
    constructor(props){
        super(props)
    }

    state = {
        file: {name: 'file.txt'}
    }

    interaction = [{name: 'Захватить'}, {name: 'Освободить'}, {name: 'Загрузить'}, {name: 'Выгрузить'}]


    render() {
        return(
            <div className='file-panel-content'>
                <h2>Панель управления файлом</h2>
                <div className='state'>
                    <div>Имя файла:</div>
                    <div>{this.props.element.name}</div>
                </div>
                <div className='interaction'>
                    <div>Действия:</div>
                    <div className='interaction-list'>
                        {this.interaction.map((value) =>
                            <div><a>{value.name}</a></div>)}
                    </div>
                </div>
            </div>
        )
    }
}