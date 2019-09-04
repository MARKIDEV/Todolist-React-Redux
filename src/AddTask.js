import React, { Component } from "react";
import { connect } from "react-redux";
import { addTask } from "./Action/action";

class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ""
    };
  }
  handelChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  Concatitask = () => {
    const newTask = {
      id: this.props.id,
      content: this.state.task
    };
    this.props.addTask(newTask);
    this.setState({
      task: ""
    });
  };
  render() {
    return (
      <div>
        <input
          className="input-Task"
          placeholder="enter another task to do"
          name="task"
          value={this.state.task}
          onChange={this.handelChange}
        />
        <button
          className="btn-submit"
          type="submit"
          onClick={() => {
            this.Concatitask();
          }}
        >
          Add new Task
        </button>
      </div>
    );
  }
}
const MapStateToProps = state => ({
  todos: state.todos,
  id: state.id
});

const MapDispatchToProps = dispatch => ({
  addTask: task => dispatch(addTask(task))
});
export default connect(
  MapStateToProps,
  MapDispatchToProps
)(AddTask);
