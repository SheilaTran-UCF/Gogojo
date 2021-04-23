import React from 'react';
import {View, Text, TextInput, Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');

const CustomInput = ({phd, name, _onChangeText, _value, title}) => {
  return (
    <View>
      <Text style={styles.textName}>{title}</Text>
      <TextInput
        style={styles.text}
        onChangeText={_onChangeText}
        value={_value}
        placeholder={phd}
        name={name}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: 60,
    justifyContent: 'center',
    backgroundColor: 'green',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    color: 'white',
  },
  barMenu: {position: 'absolute', top: 10, left: 10},
  backgroundImage: {
    width: (width / width) * width,
    height: (height / height) * height,
  },
  userInfo: {
    backgroundColor: 'white',
    textAlign: 'center',
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    bottom: 30,
  },
  name: {
    marginLeft: 70,
    fontSize: 30,
    // fontFamily: 'Sunday Fun',
  },
  container: {marginTop: 10, marginHorizontal: 10},
  text: {
    height: 45,
    margin: 5,
    borderWidth: 1,
    backgroundColor: 'white',
    opacity: 0.5,
    marginTop: -0.5,
    borderRadius: 10,
    // marginBottom: 20,
    paddingLeft: 10,
    justifyContent: 'center',
    fontSize: 10,
  },
  picker: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
  },
  textName: {
    textAlign: 'center',
    fontSize: 15,
    // fontFamily: 'Sunday Fun',
  },
  touch: {
    marginTop: 10,
    marginLeft: 10,
    backgroundColor: 'green',
    height: 40,
    width: 100,
    alignSelf: 'center',
    alignItems: 'center',
    paddingTop: 10,
    borderRadius: 10,
  },
});
