import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
// uuid has no export default, so import everything under the name 'uuid'
// import * as uuid from 'uuid';
// For HTTP requests
import axios from 'axios';
import './App.css';

class App extends Component {
	// Add state to the main app component
	// todos is an array of objects containing the todo items
	state = {
		todos: [],
	};

	// Make initial request - runs right after the component mounts
	componentDidMount() {
		// Returns a promise, that resolves to a response with the property data, which contains the requested data
		// Limiting it to 10 items
		axios
			.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
			.then((response) => this.setState({ todos: response.data }));
		// Added to the todos array on the state
	}

	toggleComplete = (id) => {
		// Change the state of the App
		// Iterate through the todos array inside the state object
		// Find the item we clicked on and change its state
		this.setState({
			todos: this.state.todos.map((todo) => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}

				return todo;
			}),
		});
	};

	// Delete todo item
	delTodo = (id) => {
		axios
			.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
			.then((reponse) =>
				this.setState({
					todos: this.state.todos.filter((todo) =>
						todo.id === id ? false : true
					),
				})
			);
	};

	// Create new todo item
	addTodo = (title) => {
		// Make a post request to the server to add our new todo item
		axios
			.post('https://jsonplaceholder.typicode.com/todos', {
				title,
				completed: false,
			})
			.then((response) =>
				this.setState({ todos: [...this.state.todos, response.data] })
			);
		// Add item to App state
		// ...this.state.todos => copying what we already have
	};

	render() {
		// Access state: this.state.todos

		return (
			// This is JSX
			<Router>
				<div className='App'>
					<div className='container'>
						<Header />

						{/* 
              Add a Route that is just a single component
              path='/' => index, home
             */}
						{/* The TodoList page as a component */}
						<Route
							exact
							path='/React-TodoList'
							render={(props) => (
								<React.Fragment>
									<AddTodo addTodo={this.addTodo} />
									{/* 
                  Embed a component inside the main app
                  Add a property to the component, called todos, that's the todos array inside the state
                */}
									<Todos
										todos={this.state.todos}
										toggleComplete={this.toggleComplete}
										delTodo={this.delTodo}
									/>
								</React.Fragment>
							)}
						/>

						{/* The About page as a component */}
						<Route path='/React-TodoList/about' component={About} />
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
