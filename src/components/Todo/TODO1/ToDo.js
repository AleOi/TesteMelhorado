import React, { Component } from 'react';
import './ToDo.css';
import TodoItem from './TodoItem';
import PropType from 'prop-types';

class ToDo extends Component {

    state = {
        todos:
        [
            {
                id:1,
                title: "Primeiro Item",
                completed: false
            },
            {
                id:2,
                title: "Segundo Item",
                completed: false
            },
            {
                id:3,
                title: "Terceiro Item",
                completed: false
            }
        ]
    }

    render() {
        return  (
            <div className = "Principal">
                {this.state.todos.map((todo) =>
                    <TodoItem key = {todo.id} todo = {todo}/>
                )}
            </div>
        )

    }



}

ToDo.PropType = {
    todos: PropType.array.isRequired
}


export default ToDo
