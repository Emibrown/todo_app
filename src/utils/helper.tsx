import Toast from 'react-native-simple-toast';

export const notify = (message:string) => {
    return Toast.show(message);
}
  