import React, { Component, useState } from 'react';
import './Todo.css'
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from '../../data.json';

class Todo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            array: data,
            value: ''
        };

    }


    render() {

        const handleChange = (event) => {
            this.setState({value: event.target.value})
            console.log(this.state.value);
        }
        
        const completeTask = (id) => {
            let newArray = [...this.state.array];
            newArray[id-1].complete = !newArray[id-1].complete
            this.setState({newArray})
        }

        const removeTask = (id) => {
            //let newArray = [...this.state.array];
            let newArray = this.state.array.map(i => Object.assign({}, i))
            let filteredArray = newArray.filter((item) => item.id !== id);
            this.setState({array: filteredArray}, () => {
                console.log(this.state);
            }
            
            )}

        const addTask = (event) => {
            event.preventDefault()
            let newArray = this.state.array.map(i => Object.assign({}, i))
            let newTask = {
                id: newArray.length + 1,
                task: this.state.value,
                complete: false
            }
            newArray.push(newTask)
            this.setState({array: newArray}, () => {
                console.log(this.state.array);
            })
            console.log(newArray);
            

            
        }


        const mappedArray = this.state.array.map((item, i) => 
        <ul key={item.task} className={item.complete ? "todoItemCompleted" : "todoItem"} >
            {item.task}
            <li key={item.task} className="todoButtons"><Button onClick={item.complete ? () => removeTask(item.id) : () => completeTask(item.id)} variant={item.complete ? "outline-danger" : "outline-success"}>{item.complete ? "✕" : "✔"} </Button>{' '}</li>
            <hr/>
        </ul>
        );
        
        


        return (
            <div className="todoContainer">
                <div className="todoHeaderContainer">
                    <h2 className="todoHeaderContainerText">To-Do</h2>
                </div>
                <div className="todoList">
                    <div className="addTaskContainer">
                        <Form>
                            <Form.Group className="mb-3" controlId="Form.ControlTextarea1">
                                
                                <Form.Control onChange={handleChange} placeholder='new task' as='textarea' rows={1} />
                                <div className="buttonContainer">
                                    <Button variant="primary" type="submit" onClick={addTask}>Add</Button>
                                </div>
                                
                            </Form.Group>
                        </Form>
                        
                    </div>
                    
                    {mappedArray}
                </div>


                
            </div>
        );
    }
}

export default Todo;
