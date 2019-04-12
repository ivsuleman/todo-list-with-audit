import React, { Component } from "react";

class TodoForm extends Component {
  state = {
    name: "",
    description: ""
  };

  handleChange = e => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      name: "",
      description: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <label>Description:</label>
          <input
            type="text"
            name="description"
            onChange={this.handleChange}
            value={this.state.description}
          />
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            <i className="material-icons right">add</i>
            Add ToDo
          </button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
