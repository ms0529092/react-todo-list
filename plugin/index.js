import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Main from '../src/main.js';

class App extends React.Component{
    render(){
        return <Main />
    }
}


ReactDOM.render(<App />, document.getElementById('app'));