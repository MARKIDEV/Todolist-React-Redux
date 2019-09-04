import React from "react";
import {connect} from "react-redux";
import List from "./List.js";
import AddTask from "./AddTask";


class App extends React.Component {
  render() {
    return (
      <div>
        <h1>My To Do App </h1>
        <List />
        <AddTask />
        
     
      </div>
    );
  }
}

export default connect() (App);
