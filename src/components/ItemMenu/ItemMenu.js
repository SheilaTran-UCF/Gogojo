import React from 'react';
import Ionicons from 'react-native-vector-icons/FontAwesome5';

import {
  View,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

export default function ItemMenu({navigation}) {
  const {height, width} = Dimensions.get('window');
  return (
    <ImageBackground
      style={{
        width: (width / width) * width,
        height: (height / height) * height,
      }}
      blurRadius={1}
      resizeMode="stretch"
      source={require('../../assets/mapvietnam.png')}>
      <View style={{marginTop: 20, marginLeft: 10}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            top: 5,
          }}>
          <TouchableOpacity
            style={{marginTop: 10, marginLeft: 10}}
            onPress={() => navigation.openDrawer()}>
            <Ionicons name="bars" size={25} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
