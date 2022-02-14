import React from 'react';
import {
    FlatList,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';
import {SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { appState, todoData, RootStackParamList } from '../utils/interface';
import { StackScreenProps} from '@react-navigation/stack';
import { moderateScale } from 'react-native-size-matters';
import Tasks from "../components/Tasks"
import EmptyList from "../components/EmptyList"

type Props = StackScreenProps<RootStackParamList, 'Done'>;
  
 
const Done = ({navigation}:Props) => {
    const state = useSelector((state:appState) => state);
    const dispatch = useDispatch();


    const keyExtractor = React.useCallback(
        (item, i) => i.toString(),
        []
    )

    const renderItem = React.useCallback(
        ({ item, index }) => 
        <Tasks key={index} item={item} onPress={()=>navigation.navigate("Edit",item)} />,
        []
    )

    const ListEmpty = React.useCallback(
        ({ item, index }) => 
            <EmptyList key={index} info="No Tasks" />,
        []
    )

    // React.useEffect(()=>{
    //     console.log(state.todo);
        
    // },[])


    return (
        <SafeAreaView style={styles.container}>
            <StatusBar 
                translucent={true}
                backgroundColor="rgba(0,0,0,0)"
                barStyle="dark-content"
                showHideTransition="slide"
            />
            <View style={styles.header}>
                <Text style={styles.title}>
                    Done Tasks
                </Text>
            </View>
            <View>
                <FlatList
                    data={state.todo.filter((tasks:todoData) => tasks.done == true).reverse()}
                    showsVerticalScrollIndicator={false}
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
                    removeClippedSubviews={true}
                    ListEmptyComponent={ListEmpty}
                    maxToRenderPerBatch={30}
                    updateCellsBatchingPeriod={0}
                    initialNumToRender={50}
                    windowSize={21}
                    onEndReachedThreshold={0.01}
                    style={{

                    }}
                    contentContainerStyle={{
                        paddingBottom:150,
                    }}
                />
            </View>
        </SafeAreaView>
    );
 };
 
 const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"rgba(24,23,67,0.15)"
    },
    header:{
        paddingVertical:"3%"
    },
    title:{
        textAlign:"center",
        fontSize:moderateScale(30),
        textTransform:"uppercase",
        fontWeight:"bold",
        color:"#181743"
    },
    menu:{
        width:"100%",
        position:"absolute",
        bottom:0,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
    }
 });
 
 export default Done;
 