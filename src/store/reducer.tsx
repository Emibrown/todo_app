import { any } from "prop-types";
import { ADD_TODO,REMOVE_FROM_TODO, LOADING_STATUS,UPDATE_TODO,RESTORE_APP } from "./action";
import { appState, todoData } from "../utils/interface";

const initialState: appState = {
    todo: [],
    loading: true,
    name: "Todo List"
}

const Reducer = (state = initialState, action:any) => {
  switch (action.type) {
    case RESTORE_APP:
        return {
            ...state,
            loading: false,
            todo: action.payload.todo,
        };
    case ADD_TODO:
        return {
            ...state,
            todo: [...state.todo, action.payload.todo]
        };
    case UPDATE_TODO:
        return {
            ...state,
            todo: action.payload.todo
        };
    case REMOVE_FROM_TODO:
        return {
            ...state,
            todo: state.todo.filter((Item:todoData) => Item._id !== action.payload.todo)
        };
    case LOADING_STATUS:
        return {
            ...state,
            loading: action.payload.loading
        };
  }
  return state
}

export default Reducer