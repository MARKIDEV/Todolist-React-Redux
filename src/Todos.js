import React from "react";

const Todos = ({ todos }) => {
 todos.length ? (
    todos.map(task => {
     return(
        <div>
          <span>{task.content}</span>
        </div>
      )
    })
  ) : (
    <p> you have done all your tasks </p>
  );

  
};
export default Todos;
