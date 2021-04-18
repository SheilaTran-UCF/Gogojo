import React from 'react';
import Ionicons from 'react-native-vector-icons/FontAwesome5';

import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

export default function Searching(props) {
  const {height, width} = Dimensions.get('window');

  return (
    <ImageBackground
      style={{
        width: (width / width) * width,
        height: (height / height) * height,
      }}
      blurRadius={1}
      resizeMode="stretch"
      source={require('../../../assets/mapvietnam.png')}>
      <View style={{marginTop: 20, marginLeft: 10}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            top: 5,
          }}>
          <TouchableOpacity
            style={{marginTop: 10, marginLeft: 10}}
            onPress={() => props.navigation.openDrawer()}>
            <Ionicons name="bars" size={25} color="black" />
          </TouchableOpacity>
          <Text style={{alignItems: 'center', top: 50, fontSize: 30}}>
            Searching
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
}
