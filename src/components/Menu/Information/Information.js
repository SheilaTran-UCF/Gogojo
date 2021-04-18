import React from 'react';
import Ionicons from 'react-native-vector-icons/FontAwesome5';
import {Avatar} from 'react-native-paper';

import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import InforText from '../InforText/InforText';

const {height, width} = Dimensions.get('window');
const widthText = width / 3;

export default function Information({route, navigation}) {
  const {
    fullname,
    dob,
    sex,
    phone,
    email,
    marriage,
    education,
    health,
    insurance,
  } = route.params.info;
  // alert(JSON.stringify(route.params));
  return (
    <SafeAreaView>
      <View>
        <Text
          style={{
            textAlign: 'center',
            color: 'white',
            fontSize: 20,
            height: 60,
            top: 10,
            width: width,
            backgroundColor: 'green',
            position: 'relative',
          }}>
          Personal Information
        </Text>
      </View>
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
              width: width,
            }}
          />
          <View style={{position: 'absolute', flexDirection: 'row'}}>
            <Text
              style={{
                backgroundColor: 'white',

                textAlign: 'center',
                position: 'absolute',
                textAlignVertical: 20,
                marginTop: 20,
                padding: 20,
                borderRadius: 10,
                height: 60,
                width: 370,

                bottom: '70%',
              }}>
              MyName
            </Text>
            <Avatar.Image
              source={require('../../../assets/avatar.jpeg')}
              style={{
                left: 70,
                bottom: 42,
              }}
            />
            <TouchableOpacity
              style={{marginTop: 20, right: 60}}
              onPress={() => navigation.navigate('Personal')}>
              <Ionicons name="bars" size={25} color="green" />
            </TouchableOpacity>
          </View>
          <View
            style={{
              top: 70,
              backgroundColor: 'white',
              height: 600,
              width: 370,
              opacity: 0.5,
            }}>
            <InforText name="Full Name" value={fullname} />
            <InforText name="Day of birth" value={dob} />
            <InforText name="Sex" value={sex} />
            <InforText name="Phone" value={phone} />
            <InforText name="Email" value={email} />
            <InforText name="maririage" value={marriage} />
            <InforText name="Education" value={education} />
            <InforText name="Health" value={health} />
            <InforText name="Insurance" value={insurance} />
          </View>
          <TouchableOpacity
            style={{
              marginTop: 10,
              marginLeft: 10,
              backgroundColor: 'green',
              height: 40,
              width: 100,
              alignSelf: 'center',
              alignItems: 'center',
              paddingTop: 10,
              borderRadius: 10,
            }}
            // onPress={() => navigation.openDrawer()}>
            onPress={() => navigation.navigate('Personal')}>
            <Text>Check InfoText</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
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
