import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        // Return an object that contains al the styles for each todo item
        return {    
            backgroundColor: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            // If the item is completed put a line-through
            textDecoration: this.props.todo.completed ? 
            'line-through' : 'none'
        }
    };

    // To be able to access the state of the app(where we have the todos array, which contains all the todo items and its properties), we need to 'go up' in the components 'list'
    // Going up one level, we reach the Todo component, which contains the todo items. But the information that we wanna change(the completed property) it isn't there, so we go up one more level
    // Now we have reached the app main component(contains all other components in our program). We can access the state of the app and change it, meaning we can change the property 'completed' of each todo item
    // TodoItem => Todos => App
    // We create methods inside the properties and call them
    
    render() {  
        // Destructuring the this.props object
        const {id, title} = this.props.todo;
        
        return (
            <div style={this.getStyle()}>
                <p>
                    {/* Add a checkbox, and some space between it and the item */}
                    {/* Add an event for the change on checkbox */}
                    {/* Bind the 'this' and 'id' to the markComplete property so that in App.js(where is the state) we know which item we are changing the 'completed' property */}
                    <input type='checkbox' onChange={this.props.toggleComplete.bind(this, id)} /> {''}
                    {title}
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}

// Defining the kind of property for each todo item
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

// Using inline style
// <div style={{backgroundColor: '#f4f4f4'}}>

// Using style with variables
const btnStyle = {
    backgroundColor: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
};

// Defining the kind of property for the todo items
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    toggleComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

export default TodoItem