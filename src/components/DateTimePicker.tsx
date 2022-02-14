import React, { useState } from "react";
import { Button, View,Text,TouchableOpacity } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";
import { moderateScale } from 'react-native-size-matters';


type Props = {
    mode: any;
    value?: any;
    onChange?: any;
};
  

const DateTimePicker: React.FC<Props> = ({
    value,
    mode = "date",
    onChange
}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [newValue, setNewValue] = useState(value);


  const showDatePicker = () => {      
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date:any) => {
    hideDatePicker();
    if(mode == "time"){
        setNewValue(date)
    }else{
        setNewValue(date)
    }
    onChange(date)
  };

  return (
    <TouchableOpacity 
        style={{
            flex:1,
            borderBottomWidth:1,
            borderBottomColor:"#95989A",
            paddingVertical:"3%",
            paddingHorizontal:"1%"
        }} 
        onPress={showDatePicker}
    >
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode={mode}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <Text style={{
          fontSize:moderateScale(12),
          fontWeight:"normal"
      }}>
          {
              !newValue?(
                <Text></Text>
              ):mode == "time"?(
                <Text style={{
                    fontSize:moderateScale(12),
                    fontWeight:"normal"
                }}>
                    {moment(newValue).format('LT')}
                </Text>
              ):(
                <Text style={{
                    fontSize:moderateScale(12),
                    fontWeight:"normal"
                }}>
                     {moment(newValue).format('LL')}
                </Text>
              )
          }
      </Text>
    </TouchableOpacity>
  );
};

export default DateTimePicker;