import React from 'react';
import './todolist.css';

import TodolistTitle from '../../components/todolist-title.js';
import TodolistAdd from '../../components/todolist-add';

class TodolistViews extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div className="todolist">
                <div className="todolist-title">
                    <TodolistTitle />
                </div>
                <div className="todolist-add">
                    <TodolistAdd />
                </div>
                <div >

                </div>
            </div>
        )
    }
}

export default TodolistViews;