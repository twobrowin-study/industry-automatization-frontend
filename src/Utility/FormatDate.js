import React from 'react'
import Moment from 'moment'

export default class FormatDate extends React.Component {
    render() {
        return(
            <div>{Moment(this.props.date).format('lll')}</div>
        )
    }
}