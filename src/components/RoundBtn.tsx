import React from 'react';
import {
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image
} from 'react-native';


const { width, height } = Dimensions.get('window');

const per_height = (value:number) => (value*height)/100
const per_width = (value:number) => (value*width)/100

type Props = {
    image: any;
    onPress?: any;
};


const RoundBtn: React.FC<Props> = ({
 image,
 onPress
}) => {
 

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <Image source={image} style={styles.img} resizeMode="cover" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    container:{
        width:per_height(10),
        height:per_height(10),
        borderRadius:per_height(5),
        justifyContent:"center",
        alignItems:"center",
        margin:"3%"
    },
    img:{
        width:per_height(10),
        height:per_height(10)
    }
});

export default RoundBtn;
