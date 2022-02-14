import React from 'react';
import {
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  View
} from 'react-native';
import images from '../assets'


const { width, height } = Dimensions.get('window');
const per_height = (value:number) => (value*height)/100
const per_width = (value:number) => (value*width)/100

const icons = [images.gym,images.food,images.games,images.loc,images.party,images.sport]

type Props = {
  value: any;
  onChange?: any;
};


const IconSelect: React.FC<Props> = ({
  value = null,
  onChange
}) => {
  const [selected, setSelected] = React.useState(value)


  const isSelected = React.useCallback((id:any)=>{
    if(selected == id){
      return true
    } else{
      return false
    }
  },[selected])

  const onClick = async (iten:any) => {    
    setSelected(iten)
    onChange(iten)
  }

  return (
    <View style={{
      flex:1,
      flexDirection:"row",
      justifyContent:"space-between",
      marginTop:"5%"
    }}>
      {
        icons.map((item, i) =>(
          <TouchableOpacity key={i} style={[styles.container,isSelected(item)&&{backgroundColor:"rgba(254,166,76,0.5)"}]} onPress={()=>onClick(item)}>
              <Image source={item} style={styles.img} resizeMode="cover" />
          </TouchableOpacity>
        ))
      }
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        padding:"3%",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:50
    },
    img:{
        width:per_width(8),
        height:per_width(8)
    }
});

export default IconSelect;
