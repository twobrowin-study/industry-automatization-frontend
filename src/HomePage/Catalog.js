import React from 'react'
import CatalogList from './CatalogList'
import '../css/Catalog.css'

export default class Catalog extends React.Component{
    render() {
        return(
            <div className='catalog'>
                <p>{this.props.catalog.name}</p>
                <CatalogList list={this.props.catalog.list} />
            </div>
        )
    }
}