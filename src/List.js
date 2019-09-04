import React from "react";
import { connect } from "react-redux";
import { deleteTask } from "./Action/action";
import { editTask } from "./Action/action";

const List = ({ todos, deleteTask, editTask }) => (
  <div>
    <ul>
      {todos.map(el => (
        <li key={el.id}>
          {el.content}{" "}
          <button
            onClick={() => {
              deleteTask(el.id);
            }}
          >
            Delete Task
          </button>
          <button
            onClick={() => {
              editTask(el.id);
            }}
          >
            Edit
          </button>
        </li>
      ))}
    </ul>
  </div>
);

const MapStateToProps = state => {
  return { todos: state.todos };
};
const MapDispatchToProps = dispatch => ({
  deleteTask: task => dispatch(deleteTask(task)),
  editTask: task => dispatch(editTask(task))
});

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(List);
