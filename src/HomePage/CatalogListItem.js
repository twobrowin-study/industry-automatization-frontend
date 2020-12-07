import React from 'react'
import Catalog from './Catalog'
import File from './File'
import '../css/CatalogListItem.css'

export default class CatalogListItem extends React.Component{
    render() {
        let content;
        if(this.props.element.type == "catalog") {
            content = <Catalog catalog={this.props.element} />
        }
        else if (this.props.element.type == "file"){
            content = <File element={this.props.element} />
        }
        else {
            content = <div>Не распознан тип  каталога или файла</div>
        }
        return(
            <div className='catalog-list-item'>
                {content}
            </div>
        )
    }
}