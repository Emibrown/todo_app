import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider} from 'react-native-safe-area-context';
import { createStackNavigator,TransitionPresets} from '@react-navigation/stack';
import MainStack from './MainStack';
import Loading from '../screens/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { appState} from '../utils/interface';
import { restoreApp } from '../store/actionCreators';

const Stack = createStackNavigator()


function StackNavigator() {
    const state = useSelector((state:appState) => state);
    const dispatch = useDispatch();

    React.useEffect(()=>{
        dispatch(restoreApp())
    },[])

    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        ...TransitionPresets.SlideFromRightIOS
                    }}
                >
                     {
                        state.loading?(
                            <Stack.Screen 
                                name="Loading" 
                                component={Loading} 
                                options={{
                                    headerShown:false
                                }}
                            />
                        ):(
                            <Stack.Screen 
                                name="MainStack" 
                                component={MainStack} 
                                options={{
                                headerShown:false
                                }}
                            />
                        )
                    }
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    )
}
  
export default StackNavigator