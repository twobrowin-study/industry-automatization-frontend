import React from 'react'
import CatalogListItem from '../HomePage/CatalogListItem'
import '../css/CatalogList.css'

export default class CatalogList extends React.Component {
    render() {
        return(
            <div className='catalog-list'>
                {this.props.list.map((value) =>
                    <CatalogListItem element={value} />
                )
                }
            </div>
        )
    }
}