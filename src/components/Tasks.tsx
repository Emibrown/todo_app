import React from 'react';
import {
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  View,
  Text
} from 'react-native';
import moment from 'moment';
import { moderateScale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';


const { width, height } = Dimensions.get('window');
const per_height = (value:number) => (value*height)/100
const per_width = (value:number) => (value*width)/100


type Props = {
  item: any;
  onPress?: any;
};


const Tasks: React.FC<Props> = ({
  item,
  onPress
}) => {
  const navigation = useNavigation();


  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={item.icon} style={styles.img} resizeMode="cover" />
      <Text style={{flex:1,marginLeft:"5%",color:"#181743", fontWeight:"normal",fontSize:moderateScale(14)}} numberOfLines={1}>{item.des}</Text>
      <View style={{
        marginLeft:"1%"
      }}>
        <Text style={{color:"#181743", fontWeight:"normal",fontSize:moderateScale(14)}}>{moment(item.date).format('ll')}</Text>
        <Text style={{color:"#181743",fontSize:moderateScale(13),}}>{moment(item.time).format('LT')}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"white",
    flexDirection:"row",
    alignItems:"center",
    marginBottom:"5%",
    paddingHorizontal:"4%",
    marginHorizontal:"5%",
    paddingVertical:"3%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius:10
  },
  img:{
    width:per_height(5),
    height:per_height(5)
  }
});

export default Tasks;
