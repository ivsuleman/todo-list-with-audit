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
        <h5 className="center blue-text">Add a ToDo</h5>
        <form onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            required="required"
            onChange={this.handleChange}
            value={this.state.name}
          />

          <label>Description:</label>
          <input
            type="text"
            name="description"
            required="required"
            onChange={this.handleChange}
            value={this.state.description}
          />
          <button
            className="btn-floating btn-medium waves-effect waves-light blue"
            type="submit"
            name="action"
          >
            <i className="material-icons left">add</i>
          </button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
