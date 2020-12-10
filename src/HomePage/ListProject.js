import React from 'react'
import ListProjectItem from './ListProjectItem'
import '../css/ListProject.css'

export default class ListProject extends React.Component {
    render() {
        return(
            <div>
                <h2>Список проектов:</h2>
                <div className='list-project'>
                    {this.props.list.map((value) =>
                        <ListProjectItem element={value} myContext={this.props.myContext}/>
                    )
                    }
                </div>
            </div>
        )
    }
}