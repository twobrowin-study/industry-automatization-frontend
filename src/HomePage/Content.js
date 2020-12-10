import React from 'react'
import ListProject from "./ListProject";
import Project from './Project/Project'

export default class Content extends React.Component {
    constructor(props) {
        super(props)
    }
    state = {
        content:this.props.content
    }

    changePage(page) {
        this.setState({
            content: page
        })
    }

    myContext = {
        changePage: this.changePage.bind(this)
    }

    list1 = [
        {
            type:'project',
            name: 'project',
            list: []
        },
        {
            type:'subproject',
            name: 'project',
            list: []
        },
        {
            type:'subproject',
            name: 'project',
            list: []
        },
        {
            type:'subproject',
            name: 'project',
            list: []
        }
    ]

    project = {
            name: "project",
            list: [
                {
                    type: 'subproject',
                    name: 'subproject',
                    list: [
                        {
                            type: 'file',
                            name: 'file.txt'
                        },
                        {
                            type: 'file',
                            name: 'file2.txt'
                        }
                    ]

                },
                {
                    type: 'file',
                    name: 'file.txt'
                }
            ]

        }

    render() {
        let content
        if (this.state.content === 'listProject') {
            content = <ListProject list={this.list1} myContext={this.myContext}/>
        }
        else if(this.state.content === 'project') {
            content = (<Project project={this.project} showFilePanel={this.props.showFilePanel}/>)
        }
        return(
            <div>{content}</div>
        )
    }
}