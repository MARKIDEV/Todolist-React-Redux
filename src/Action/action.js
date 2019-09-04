import { ADD_TASK, DELETE_TASK, EDIT_TASK } from "./actiontype";

export function addTask(payload) {
  return { type: ADD_TASK, payload };
}

export function deleteTask(payload) {
  return { type: DELETE_TASK, payload };
}

export function editTask(payload) {
  return { type: EDIT_TASK, payload };
}
