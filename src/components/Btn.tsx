import React from 'react';
import {
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
  View,
  ActivityIndicator
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';


const { width, height } = Dimensions.get('window');

const per_height = (value:number) => (value*height)/100
const per_width = (value:number) => (value*width)/100

type Props = {
    color?: string;
    title: string;
    onPress?: any;
    loading?: boolean;
};


const RoundBtn: React.FC<Props> = ({
    color="#254DDE",
    title,
    onPress,
    loading = false
}) => {
 

  return (
    <TouchableOpacity style={[styles.container,{backgroundColor:color}]} disabled={loading} onPress={()=>onPress()}>
        {
            loading?(
                <View>
                    <ActivityIndicator size="small" color="white" />
                </View>
            ):(
                <Text style={{
                    fontSize:moderateScale(16),
                    color:"white",
                    fontWeight:"500"
                }}>
                    {title}
                </Text>
            )
        }
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    container:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        paddingHorizontal:"18%",
        height:moderateScale(50),
        borderRadius:25
    },
});

export default RoundBtn;
