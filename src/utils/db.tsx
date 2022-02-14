import AsyncStorage from '@react-native-async-storage/async-storage';
import { todoData } from './interface';


export const getTodo = async () => {
    try {
      let value = await AsyncStorage.getItem('@todo')      
      return value !== null? JSON.parse(value) : [];
    } catch(e) {
        return []
    }
}

export const addTodo = async (value:todoData) => {
    try {
        let tasks:any = await AsyncStorage.getItem('@todo')
        tasks = tasks !== null? JSON.parse(tasks) : [];
        const newTasks = [...tasks,value]
        await AsyncStorage.setItem('@todo', JSON.stringify(newTasks))
        return Promise.resolve();
    } catch(e) {        
        return Promise.reject(e);
    }
}

export const editTodo = async (value:todoData) => { 
    try {
        let tasks:any = await AsyncStorage.getItem('@todo')
        tasks = tasks !== null? JSON.parse(tasks) : [];
        const newTasks = tasks.map((el:todoData) =>
            el._id === value._id ? { ...el, ...value } : el
        );
        await AsyncStorage.setItem('@todo', JSON.stringify(newTasks))
        return newTasks
    } catch(e) {
        return Promise.reject(e);
    }
}

export const RemoveTodo = async (_id:string) => {
    try {
        let tasks:any = await AsyncStorage.getItem('@todo')
        tasks = tasks !== null? JSON.parse(tasks) : [];
        const newTasks = tasks.filter((Item:todoData) => Item._id !== _id)
        await AsyncStorage.setItem('@todo', JSON.stringify(newTasks))
        return Promise.resolve();
    } catch(e) {
        return Promise.reject(e);
    }
}


