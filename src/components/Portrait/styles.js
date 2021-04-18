import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');
const componentHeight = height / 3;

export const styles = StyleSheet.create({
  btnDangNhap: {
    backgroundColor: '#248504',
    width: componentHeight,
    height: 40,
    borderRadius: 5,
    bottom: 20,
  },
});
