import React,{useState} from 'react';
import {
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import {SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { appState, todoData, RootStackParamList } from '../utils/interface';
import { StackScreenProps} from '@react-navigation/stack';
import { moderateScale } from 'react-native-size-matters';
import Btn from "../components/Btn"
import IconSelect from "../components/IconSelect"
import DateTimePicker from "../components/DateTimePicker"
import {newTodo} from "../store/actionCreators"
import {notify} from "../utils/helper"
import uuid from 'react-native-uuid';

type Props = StackScreenProps<RootStackParamList, 'Create'>;
  
 
const Create = ({navigation}:Props) => {
    const state = useSelector((state:appState) => state);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [icon, setIcon] = useState("");
    const [name, setName] = useState("");
    const [des, setDes] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");


    const onSubmit = async () => {
      // icon required
      if(!icon) return notify('Icon is required');
      // Name is unique
      if(!name) return notify('Name is required');
      // description is required
      if(!des) return notify('Description is required');
      // date is required
      if(!date) return notify('Date is required');
      // Time is required
      if(!time) return notify('Time is required');
      setLoading(true)
      const tasks = {
        _id:uuid.v4().toString(),
        icon,
        name,
        des,
        date,
        time,
        done:false
      }
      try{
        await dispatch(newTodo(tasks))        
        navigation.goBack()
      }catch(e){
        console.log(e);
      }
      setLoading(false)
    }





 

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
                    New Tasks
                </Text>
            </View>

            <ScrollView>
              <View style={{
                paddingHorizontal:"8%",
                marginTop:"5%"
              }}>

                <View style={styles.inputContainer}>
                  <Text style={styles.label}>
                    Icon
                  </Text>
                  <IconSelect value={null} onChange={(value:any)=>setIcon(value)}/>
                </View>

                <View style={styles.inputContainer}>
                  <Text style={styles.label}>
                    Name
                  </Text>
                  <TextInput 
                    style={{
                      flex:1,
                      borderBottomWidth:1,
                      borderBottomColor:"#FE1E9A",
                      height:moderateScale(40),
                    }}
                    onChangeText={(value:any)=>setName(value)}
                  />
                </View>

                <View style={styles.inputContainer}>
                  <Text style={styles.label}>
                    Description
                  </Text>
                  <TextInput 
                    style={{
                      flex:1,
                      borderWidth:1,
                      borderColor:"rgba(24,23,67,0.2)",
                      backgroundColor:"rgba(255,255,255,0.3)",
                      marginTop:"3%",
                      height:moderateScale(120),
                      fontWeight:"normal",
                      fontSize:moderateScale(12),
                      paddingHorizontal:"5%",
                      paddingVertical:"5%",
                      color:'#181743'
                    }}
                    multiline
                    textAlignVertical="top"
                    onChangeText={(value:any)=>setDes(value)}
                  />
                </View>

                <View style={styles.inputContainer}>
                  <Text style={styles.label}>
                    Date
                  </Text>
                  <DateTimePicker 
                    mode="date" 
                    onChange={(value:any)=>setDate(value)}
                  />    
                </View>

                <View style={styles.inputContainer}>
                  <Text style={styles.label}>
                    Time
                  </Text>
                  <DateTimePicker 
                    mode="time" 
                    onChange={(value:any)=>setTime(value)}
                  />
                </View>

                <View style={styles.menu}>
                    <Btn title="Add" loading={loading} onPress={()=>onSubmit()} />
                </View>

              </View>

            </ScrollView>
          
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
        textTransform:"capitalize",
        fontWeight:"bold",
        color:"#181743"
    },
    menu:{
        flexDirection:"row",
        alignItems:"center",
        marginTop:"10%"
    },
    label:{
      color:"#707070",
      fontSize:moderateScale(14),
      fontWeight:"500"
    },
    inputContainer:{
      marginBottom:"8%"
    }
 });
 
 export default Create;
 