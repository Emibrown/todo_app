import React, {useEffect,useState,useRef,useContext} from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import {moderateScale } from 'react-native-size-matters';
import images from "../assets/index"




const { width, height } = Dimensions.get('window');

const per_height = (value:number) => (value*height)/100

type Props = {
  info: string;
};



const EmptyList = ({
 info = "",
}) => {
 

  return (
    <View style={{
      flex:1,
      justifyContent:"center",
      alignItems:"center",
      paddingVertical:"30%"
    }}>
      <Image source={images.empty}  style={styles.image}  resizeMode="contain"/>
      <Text style={{
        marginTop:"2%"
      }}>
        {info}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image:{
      width:per_height(20),
      height:per_height(20),
  },
});

export default EmptyList;
