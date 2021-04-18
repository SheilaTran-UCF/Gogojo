import React from 'react';

import 'react-native-gesture-handler';
import {Avatar} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Ionicons from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  ScrollView,
} from 'react-native';

export default function ScrollViewPage({navigation}) {
  const {height, width} = Dimensions.get('window');

  return (
    <SafeAreaView>
      <TouchableOpacity
        style={{marginTop: 10, marginLeft: 10}}
        onPress={() => navigation.openDrawer()}>
        <Ionicons name="bars" size={25} color="black" />
      </TouchableOpacity>

      <ImageBackground
        source={require('../../assets/mapvietnam.png')}
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
                source={require('../../assets/avatar.jpeg')}
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
              <View style={{flexDirection: 'row'}}>
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
              <View style={{marginTop: 30, flexDirection: 'row'}}>
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
                <AntDesign
                  name="caretright"
                  color="#48fa07"
                  size={15}
                  style={{left: 30}}
                />
              </View>
              <View style={{marginTop: 30, flexDirection: 'row'}}>
                <TouchableOpacity
                  style={{flexDirection: 'row'}}
                  onPress={() => navigation.navigate('Function')}>
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
              </View>
            </View>
          </View>

          <View
            style={{
              flex: 1,
              backgroundColor: '#f5f5f5',
              marginTop: height / 2.55,
            }}>
            <ScrollView>
              <View style={{marginTop: 25, left: 20}}>
                <TouchableOpacity
                  style={{flexDirection: 'row'}}
                  onPress={() => navigation.navigate('Home')}>
                  <AntDesign name="search1" color="#48fa07" size={20} />
                  <Text
                    style={{
                      fontSize: 18,
                      color: '#218505',
                      left: 15,
                    }}>
                    Job Search
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{marginTop: 25, left: 20}}>
                <TouchableOpacity style={{flexDirection: 'row'}}>
                  <MaterialCommunityIcons
                    name="briefcase-search"
                    color="#48fa07"
                    size={20}
                  />
                  <Text
                    style={{
                      fontSize: 18,
                      color: '#218505',
                      left: 15,
                    }}>
                    Searching
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{marginTop: 25, left: 20}}>
                <TouchableOpacity style={{flexDirection: 'row'}}>
                  <MaterialCommunityIcons
                    name="book-information-variant"
                    color="#48fa07"
                    size={20}
                  />
                  <Text
                    style={{
                      fontSize: 18,
                      color: '#218505',
                      left: 15,
                    }}>
                    information
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{marginTop: 25, left: 20}}>
                <TouchableOpacity
                  style={{flexDirection: 'row'}}
                  onPress={() => navigation.navigate('Home')}>
                  <AntDesign name="search1" color="#48fa07" size={20} />
                  <Text
                    style={{
                      fontSize: 18,
                      color: '#218505',
                      left: 15,
                    }}>
                    Personal
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{marginTop: 25, left: 20}}>
                <TouchableOpacity style={{flexDirection: 'row'}}>
                  <MaterialCommunityIcons
                    name="briefcase-search"
                    color="#48fa07"
                    size={20}
                  />
                  <Text
                    style={{
                      fontSize: 18,
                      color: '#218505',
                      left: 15,
                    }}>
                    Learning
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{marginTop: 25, left: 20}}>
                <TouchableOpacity style={{flexDirection: 'row'}}>
                  <MaterialCommunityIcons
                    name="book-information-variant"
                    color="#48fa07"
                    size={20}
                  />
                  <Text
                    style={{
                      fontSize: 18,
                      color: '#218505',
                      left: 15,
                    }}>
                    News
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{marginTop: 25, left: 20}}>
                <TouchableOpacity style={{flexDirection: 'row'}}>
                  <MaterialCommunityIcons
                    name="briefcase-search"
                    color="#48fa07"
                    size={20}
                  />
                  <Text
                    style={{
                      fontSize: 18,
                      color: '#218505',
                      left: 15,
                    }}>
                    Looking
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{marginTop: 25, left: 20}}>
                <TouchableOpacity style={{flexDirection: 'row'}}>
                  <MaterialCommunityIcons
                    name="book-information-variant"
                    color="#48fa07"
                    size={20}
                  />
                  <Text
                    style={{
                      fontSize: 18,
                      color: '#218505',
                      left: 15,
                    }}>
                    Internship
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{marginTop: 25, left: 20}}>
                <TouchableOpacity style={{flexDirection: 'row'}}>
                  <MaterialCommunityIcons
                    name="briefcase-search"
                    color="#48fa07"
                    size={20}
                  />
                  <Text
                    style={{
                      fontSize: 18,
                      color: '#218505',
                      left: 15,
                    }}>
                    Training
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{marginTop: 25, left: 20}}>
                <TouchableOpacity style={{flexDirection: 'row'}}>
                  <MaterialCommunityIcons
                    name="book-information-variant"
                    color="#48fa07"
                    size={20}
                  />
                  <Text
                    style={{
                      fontSize: 18,
                      color: '#218505',
                      left: 15,
                    }}>
                    fresher
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  welcome: {
    flex: 1,
    margin: 20,
    backgroundColor: 'orange',
    margin: 10,
    textAlign: 'center',
    fontSize: 20,
    paddingTop: 20,
  },
});
