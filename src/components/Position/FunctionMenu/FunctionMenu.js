import React from 'react';

import 'react-native-gesture-handler';
import {Avatar} from 'react-native-paper';

import Ionicons from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';

export default function FunctionMenu({navigation}) {
  const {height, width} = Dimensions.get('window');
  return (
    <ImageBackground
      source={require('../../../assets/mapvietnam.png')}
      style={{height: height, width: width}}
      resizeMode="stretch">
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#fff',
            flexDirection: 'column',
          }}>
          <View style={{height: height / 4}}>
            <Avatar.Image
              source={require('../../../assets/avatar.jpeg')}
              size={width / 4}
              style={{alignSelf: 'center', top: 10}}
            />
            <View style={{marginTop: 20}}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 22,
                  color: '#218505',
                }}>
                {' '}
                My Name
              </Text>
            </View>
          </View>
          <View style={{marginTop: 25, left: 20}}>
            <View style={{}}>
              <TouchableOpacity
                style={{flexDirection: 'row'}}
                onPress={() => navigation.navigate('Home')}>
                <Ionicons name="home" color="#48fa07" size={20} />
                <Text
                  style={{
                    fontSize: 18,
                    color: '#218505',
                    left: 15,
                  }}>
                  Home Page
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{marginTop: 30}}>
              <TouchableOpacity
                style={{flexDirection: 'row'}}
                onPress={() => navigation.navigate('MenuList')}>
                <Ionicons name="user-lock" color="#48fa07" size={20} />
                <Text
                  style={{
                    fontSize: 18,
                    color: '#218505',
                    left: 15,
                  }}>
                  Position
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{marginTop: 30, flexDirection: 'row'}}>
              <TouchableOpacity
                style={{flexDirection: 'row'}}
                onPress={() => navigation.navigate('MenuList')}>
                <Ionicons name="bars" color="#48fa07" size={20} />
                <Text
                  style={{
                    fontSize: 18,
                    color: '#218505',
                    left: 15,
                  }}>
                  {' '}
                  Menu
                </Text>
              </TouchableOpacity>
              <AntDesign
                name="caretright"
                color="#48fa07"
                size={14}
                style={{left: 30}}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: '#f5f5f5',
            marginTop: height / 3.5,
            marginBottom: 300,
          }}>
          <ScrollView>
            <View style={{marginTop: 25, left: 20}}>
              <TouchableOpacity
                style={{flexDirection: 'row'}}
                onPress={() => navigation.navigate('Resume')}>
                <Ionicons name="user-tie" color="#48fa07" size={20} />
                <Text
                  style={{
                    fontSize: 18,
                    color: '#218505',
                    left: 15,
                  }}>
                  {' '}
                  Resume/CV
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{marginTop: 25, left: 20}}>
              <TouchableOpacity
                style={{flexDirection: 'row'}}
                onPress={() => navigation.navigate('Personal')}>
                <Ionicons name="briefcase" color="#48fa07" size={20} />
                <Text
                  style={{
                    fontSize: 18,
                    color: '#218505',
                    left: 15,
                  }}>
                  {' '}
                  Personal
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{marginTop: 25, left: 20}}>
              <TouchableOpacity style={{flexDirection: 'row'}}>
                <Icon name="support" color="#48fa07" size={20} />
                <Text
                  style={{
                    fontSize: 18,
                    color: '#218505',
                    left: 15,
                  }}>
                  {' '}
                  Support
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{marginTop: 25, left: 20}}>
              <TouchableOpacity
                style={{flexDirection: 'row'}}
                onPress={() => navigation.navigate('Home')}>
                <Ionicons name="user-tie" color="#48fa07" size={20} />
                <Text
                  style={{
                    fontSize: 18,
                    color: '#218505',
                    left: 15,
                  }}>
                  {' '}
                  Resume/CV
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{marginTop: 25, left: 20}}>
              <TouchableOpacity
                style={{flexDirection: 'row'}}
                onPress={() => navigation.navigate('Personal')}>
                <Ionicons name="briefcase" color="#48fa07" size={20} />
                <Text
                  style={{
                    fontSize: 18,
                    color: '#218505',
                    left: 15,
                  }}>
                  {' '}
                  Personal
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{marginTop: 25, left: 20}}>
              <TouchableOpacity
                style={{flexDirection: 'row'}}
                onPress={() => navigation.navigate('Personal')}>
                <Icon name="support" color="#48fa07" size={20} />
                <Text
                  style={{
                    fontSize: 18,
                    color: '#218505',
                    left: 15,
                  }}>
                  {' '}
                  Support
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </ImageBackground>
  );
}
