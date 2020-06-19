import React from 'react';
import './todolist-title.css';

class TodolistTitleViews extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div className="todolist-title">
                <h1>TodoList-待辦清單</h1>
                <h5>請輸入項目</h5>
            </div>
        );
    }
}

export default TodolistTitleViews;