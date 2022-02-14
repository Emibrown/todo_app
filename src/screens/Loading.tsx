import React, {useEffect,useState,useRef} from 'react';
import {
  StyleSheet,
  ActivityIndicator,
  StatusBar
} from 'react-native';
import {SafeAreaView } from 'react-native-safe-area-context';
import { StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList } from '../utils/interface';



type Props = StackScreenProps<RootStackParamList, 'Loading'>;
  
 
const Loading = ({navigation}:Props) => {
  useEffect( ()=>{
  
  },[])


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar 
        translucent ={true}
        backgroundColor="rgba(0,0,0,0)"
        barStyle="dark-content"
        showHideTransition="slide"
      />
      <ActivityIndicator size={50} color="#88889F" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"rgba(24,23,67,0.15)",
    alignItems:"center",
    justifyContent:"center"
  },
});

export default Loading;
