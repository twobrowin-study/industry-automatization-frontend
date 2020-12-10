import React from 'react'

export default class ListProjectItem extends React.Component{

    onClick = (e) => {
        this.props.myContext.changePage('project');
    }

    render() {
        return(
            <div className='list-project-item' onClick={this.onClick}>
                <div className='list-project-item-content'>
                    {this.props.element.name}
                </div>
            </div>
        )
    }
}