import React from 'react'
import NavBar from "../Navbar/NavBar"
import Content from './Content'
import FilePanel from './Panels/FilePanel'
import SubprojectPanel from "./Panels/SubprojectPanel";
import ProjectGroupPanel from "./Panels/ProjectGroupPanel";
import ProjectPanel from './Panels/ProjectPanel'
import Modal from '../Utility/Modal'
import {getData} from '../lib/api'
import '../css/HomePage.css'

export default class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.getProcessDefinition = this.getProcessDefinition.bind(this)
        this.getProcessDefinition()
    }

    state = {
        content: 'listProject',
        left: {
            isOpen: true,
            panelData: {type: "project-group", projectgroup: {}}
        },
        modal : {
            isOpen: false
        }
    }


    getProcessDefinition() {
        let url = 'query/v1/process-definitions'
        getData(url, this.props.keycloak.token).then((data) => {
            this.myContext.processDefinition = []
            data._embedded.processDefinitions.forEach((item,index,array) => {
                this.myContext.processDefinition.push({name: item.name, key:item.key})
            })
        })
    }



    changePage(page, projectId) {
        this.setState({
            content: page,
            projectId: projectId
        })
    }

    myContext = {
        processDefinition : null,
        changePage: this.changePage.bind(this),
        showPanel: this.showPanel.bind(this),
        closePanel: this.closePanel.bind(this),
        showModal: this.showModal.bind(this),
        closeModal: this.closeModal.bind(this),
    }


    showPanel(panel, panelData) {
        this.setState({
            [panel]: {
                isOpen: true,
                panelData: panelData
            }
        })
    }

    closePanel(panel) {
        this.setState({
            [panel]: {
                isOpen: false
            }
        })
    }

    showModal(content) {
        this.setState({
            modal: {
                isOpen: true,
                content: content,
            }
        })

    }

    closeModal() {
        this.setState({
            modal: {
                isOpen:false
            }
        })
    }

    render() {
        let rightPanel;
        if(this.state.right) {
            if(this.state.right.isOpen) {
                if(this.state.right.panelData.type == "file") {
                    rightPanel = <FilePanel myContext={this.myContext} element={this.state.right.panelData.file} keycloak={this.props.keycloak}/>
                }
                else if(this.state.right.panelData.type == "subproject") {
                    rightPanel = <SubprojectPanel myContext={this.myContext} element={this.state.right.panelData.subproject} />
                }
            }
        }

        let leftPanel;
        if(this.state.left) {
            if(this.state.left.isOpen) {
                if(this.state.left.panelData.type == "project-group") {
                    leftPanel = <ProjectGroupPanel myContext={this.myContext} element={this.state.left.panelData.projectgroup} keycloak={this.props.keycloak}/>
                }
                else if(this.state.left.panelData.type == "project") {
                    leftPanel = <ProjectPanel myContext={this.myContext} element={this.state.left.panelData.project}/>
                }
            }
        }

        return (<div>
            <NavBar keycloak={this.props.keycloak}/>
            <div className='container'>
                <div>
                    <div className='left-panel'>
                        {leftPanel}
                    </div>
                    <div className='content-panel'>
                        <Content myContext={this.myContext} keycloak={this.props.keycloak} content={this.state.content} projectId={this.state.projectId}/>
                    </div>
                    <div className='right-panel'>
                        {rightPanel}
                    </div>
                </div>
            </div>
            {this.state.modal.isOpen && (
                <Modal content={this.state.modal.content} myContext={this.myContext} keycloak={this.props.keycloak} />
            )}
        </div>)

    }
}