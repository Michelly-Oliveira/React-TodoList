import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Component with its own state
export class AddTodo extends Component {
    // Add a state for the form
    state = {
        title: ''
    }

    // Set the this.state.title to whatever the user is typing on the input form
    changeStateTitle = (e) => this.setState({ title: e.target.value });

    // If we had more values to change (example: email, phone, etc), we can use: 
    // onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    // This way we don't need to create a separate function for each input

    onSubmitForm = (e) => {
        e.preventDefault();
        // Pass what was typed to the App main component to create a new todo item
        this.props.addTodo(this.state.title);
        // Clear the form
        this.setState({ title: '' });
    }

    render() {
        return (
            <form onSubmit={this.onSubmitForm} style={{display: 'flex'}}>
                <input 
                    type='text' 
                    name='title' 
                    placeholder='Add Todo ...' 
                    style={{flex: '10', padding: '5px'}}
                    value={this.state.title}
                    onChange={this.changeStateTitle}    
                >
                </input>
                <input
                    type='submit' 
                    value='Submit' 
                    className='btn' 
                    style={{flex: '1'}}>
                </input>
            </form>
        )
    }
}

// // Defining the kind of property for add todo item
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}


export default AddTodo
