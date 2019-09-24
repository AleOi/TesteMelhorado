import React, { Component } from 'react'
import PropType from 'prop-types'

class TodoItem extends Component {
    render() {
        console.log(this.props.todo.title)


        return (
            <div>
                {this.props.todo.title}
            </div>
        )
    }
}


TodoItem.PropType = {
    todo: PropType.object.isRequired
}


export default TodoItem
