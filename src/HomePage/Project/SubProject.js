import React from 'react'
import arrowDown from '../../img/icons/arrow-down.svg'
import arrowUp from '../../img/icons/arrow-up.svg'
import File from './File'
import projectIcon from '../../img/icons/project-icon.svg'

export default class SubProject extends React.Component {
    constructor(props) {
        super(props)
    }

    state = {
        isOpen: false
    }

    arrowClick = (e) => {
        this.setState({
            isOpen: !this.state.isOpen
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
        return(
            <div className='subproject'>
                <div className='header'>
                    <div className='project-info-and-icon'>
                        <div><img src={projectIcon} className='icon'/></div>
                        <div className='project-info'>{this.props.element.name}</div>
                    </div>
                    <div className='arrow'>
                        {arrow}
                    </div>
                </div>
                    {this.state.isOpen && (<div className='list-files'>
                        {this.props.element.list.map((value) =>
                            <div className='list-files-item'>
                                <File element={value} showFilePanel={this.props.showFilePanel}/>
                            </div>
                        )}</div>
                    )}
            </div>
        )
    }
}