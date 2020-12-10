import React from 'react'
import NavBar from "../Navbar/NavBar"
import Content from './Content'
import FilePanel from './Project/FilePanel'
import '../css/HomePage.css'

export default class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.showFilePanel = this.showFilePanel.bind(this)
    }
    state = {
        filePanel : {isOpen: false, file: null}
    }

    showFilePanel(file) {
        this.setState({
            filePanel: {
                isOpen: true,
                file: file
            }
        })
    }

    render() {
        return(
            <div>
                <NavBar />
                <div className='container'>
                    <div>
                        <div>
                        </div>
                        <div className='content-panel'>
                            <Content content='listProject' showFilePanel={this.showFilePanel}/>
                        </div>
                        <div className='file-panel'>
                            {this.state.filePanel.isOpen && (
                                <FilePanel element={this.state.filePanel.file}/>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}