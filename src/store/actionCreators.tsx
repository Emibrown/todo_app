import {
  ADD_TODO,
  RESTORE_APP,
  UPDATE_TODO,
  REMOVE_FROM_TODO
} from "./action";
import { notify } from "../utils/helper";
import {getTodo,addTodo,editTodo,RemoveTodo} from "../utils/db";
import { todoData} from "../utils/interface";


export const restoreApp = () => {
  return async (dispatch:any) => {
    const todo = await getTodo()
    const action = {
      type: RESTORE_APP,
      payload:{
        todo
      }
    }
    dispatch(action);
  };
}

export const newTodo = (tasks:todoData) => {
  return async (dispatch:any,getState:any) => {
    const value = tasks
    await addTodo(value)
    const action = {
      type: ADD_TODO,
      payload:{
        todo:value
      }
    }
    dispatch(action);
  };
}

export const updateTodo = (tasks:todoData) => {
  return async (dispatch:any,getState:any) => {
    const value =  await editTodo(tasks)
    const action = {
      type: UPDATE_TODO,
      payload:{
        todo:value
      }
    }
    dispatch(action);
  };
}

export const deleteTodo = (tasks:string) => {
  return async (dispatch:any,getState:any) => {
    await RemoveTodo(tasks)
    const action = {
      type: REMOVE_FROM_TODO,
      payload:{
        todo:tasks
      }
    }
    dispatch(action);
  };
}

