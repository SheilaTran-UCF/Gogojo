import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';

const {height, width} = Dimensions.get('window');
const widthText = width / 3;

export default function InforText({name, value, navigation}) {
  return (
    <View
      style={{
        width: width,
        flexDirection: 'row',
        justifyContent: 'space-around',
        top: 10,
      }}>
      <Text style={styles.textInfo}>{name ?? ''}</Text>
      <Text style={styles.textInfo}>:</Text>
      <Text style={styles.textInfor2}>{value ?? ''}</Text>
      {/* <Text>: Nguyen van A</Text> */}
      {/* <TouchableOpacity
        onPress={() => navigation.navigate('Information')}
        style={{
          top: 40,
          marginTop: 10,
          marginLeft: 10,
          backgroundColor: 'green',
          height: 40,
          width: 100,
          alignSelf: 'center',
          alignItems: 'center',
          paddingTop: 10,
          borderRadius: 10,
        }}>
        <Text style={{color: 'white'}}>CLear Info</Text>
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    height: 45,
    width: 350,
    margin: 5,
    borderWidth: 1,
    backgroundColor: 'white',
    opacity: 0.5,
    color: 'blue',
    marginTop: -0.5,
    borderRadius: 10,
    marginBottom: 20,
    paddingLeft: 10,
    paddingTop: 15,
  },
  textInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    top: 10,
    paddingTop: 30,
    width: widthText,
    left: 20,
    fontSize: 20,
  },
  textInfor2: {
    flexDirection: 'row',
    alignItems: 'center',
    top: 10,
    paddingTop: 30,
    width: widthText,
    right: 20,
  },
});
