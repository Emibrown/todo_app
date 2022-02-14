import * as React from 'react'
import { createStackNavigator,TransitionPresets} from '@react-navigation/stack';
import { todoData } from '../utils/interface';

// Screen
import Home from '../screens/Home';
import Create from '../screens/Create';
import Done from '../screens/Done';
import Edit from "../screens/Edit"

type RootStackParamList = {
    Home: undefined;
    Edit: todoData;
    Create: undefined;
    Done: undefined;
    Loading: undefined
};

const Stack = createStackNavigator<RootStackParamList>()


function MainStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                ...TransitionPresets.SlideFromRightIOS
            }}
        >
            <Stack.Screen 
                name="Home" 
                component={Home}
                options={{
                    headerShown:false
                }}
            />

            <Stack.Screen 
                name="Create" 
                component={Create}
                options={{
                    headerShown:false
                }}
            />

            <Stack.Screen 
                name="Done" 
                component={Done}
                options={{
                    headerShown:false
                }}
            />

            <Stack.Screen 
                name="Edit" 
                component={Edit}
                options={{
                    headerShown:false
                }}
            />
            
        </Stack.Navigator>
    )
}
  
export default MainStack