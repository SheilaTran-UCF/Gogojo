import React from 'react';
import {styles} from './styles';
import Ionicons from 'react-native-vector-icons/FontAwesome5';

import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

export default function LandsCape({navigation}) {
  const {height, width} = Dimensions.get('window');
  const componentHeight = height / 3;
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
      <View
        style={{
          flex: 1,
          alignSelf: 'center',
          justifyContent: 'center',
          bottom: 5,
        }}>
        <Image
          style={{
            width: componentHeight,
            height: componentHeight,
            resizeMode: 'contain',
          }}
          source={require('../../assets/logo.png')}
        />
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignSelf: 'center',
          justifyContent: 'center',
          flex: 2,
          top: 7,
        }}>
        <TouchableOpacity style={{}}>
          <Image
            resizeMode="contain"
            source={require('../../assets/mana.png')}
            style={{
              width: componentHeight / 2,
              height: componentHeight * 0.75,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            resizeMode="contain"
            source={require('../../assets/check.png')}
            style={{
              width: componentHeight / 2,
              height: componentHeight * 0.75,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{position: 'absolute', top: height / 6}}>
          <Image
            resizeMode="contain"
            source={require('../../assets/intro.png')}
            style={{
              width: componentHeight,
              height: componentHeight / 2,
            }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          alignSelf: 'center',
          justifyContent: 'center',
          top: 5,
        }}>
        <TouchableOpacity style={styles.btnDangNhap}>
          <Text
            style={{
              top: 10,
              textAlign: 'center',
              fontSize: (16 / width) * width,
              color: '#fbfbfd',
            }}>
            Đăng Nhập
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
