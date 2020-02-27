import React, { Component } from 'react';
import TodoItem from './TodoItem'
import PropTypes from 'prop-types';

class Todos extends Component {
  render() {
    // Access the properties this.props.todos
    const todosProps = this.props.todos
    
    /* Add a property to the component, called todo, that contains the item passed as argument from map */
    return todosProps.map(todo => <TodoItem key={todo.id} todo={todo} toggleComplete={this.props.toggleComplete} delTodo={this.props.delTodo} />);
  }
}

// Defining the kind of property for the todos
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
}

export default Todos;
