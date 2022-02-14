export interface appState  {
    todo: any;
    loading: boolean;
    name: string
}

export interface todoData  {
    _id: string;
    icon: string;
    name: string;
    des: string;
    date: string;
    time: string
    done: boolean
}


export type RootStackParamList = {
    Home: undefined;
    Create: undefined;
    Done: undefined
    Loading: undefined;
    Edit: todoData
};