import React from 'react';
import './todolist-add.css';

class TodolistAddViews extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="row todolist-add">
                <input 
                    className="col-8 todolist-add-input"
                    type="text"
                    placeholder="請輸入欲辦事項"
                />
                <button className="col-2 todolist-add-button">
                    Add
                </button>
            </div>
        );
    }
}

export default TodolistAddViews;