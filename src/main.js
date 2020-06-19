import React from 'react';
import TodoList from './views/todolistModule';


class Main extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="row justify-content-center">
                <TodoList />
            </div>
        );
    }
}

export default Main;