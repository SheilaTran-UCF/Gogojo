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

export default function Portrait(props) {
  const {height, width} = Dimensions.get('window');
  const componentHeight = height / 3;
  return (
    <ImageBackground
      style={{
        // width: (width / width) * width,
        // height: (height / height) * height,
        width: width,
        height: height,
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
            onPress={() => props.navigation.openDrawer()}>
            <Ionicons name="bars" size={25} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          alignSelf: 'center',
          justifyContent: 'center',
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
        }}>
        <TouchableOpacity
          style={styles.btnDangNhap}
          // onPress={() => navigation.navigate('Login')}>
          onPress={() => props.navigation.openDrawer()}>
          <Text
            style={{
              top: 5,
              textAlign: 'center',
              top: 10,
              fontSize: 20,
              color: '#fbfbfd',
            }}>
            PorTrait
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
