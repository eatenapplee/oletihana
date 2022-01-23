import React, { Component } from 'react';
import './Home.css'
import Todo from '../layout/Todo.js'
import Stats from '../layout/Stats.js'
import Categorizer from '../layout/Categorizer';


class Home extends Component {
    render() {
        return (
            <div className="home" >
                <Categorizer />
                <Stats />
                <Todo />
                
            </div>
        );
    }
}

export default Home;
