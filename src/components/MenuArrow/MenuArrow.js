import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Drawer} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

import Ionicons from 'react-native-vector-icons/FontAwesome5';
import {PROFILE_IMAGE} from '../../utils';

export default function MenuArrow(props) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Image source={{uri: PROFILE_IMAGE}} style={styles.sideMenuProfileIcon} />
      <Text
        style={{
          color: 'orange',
          fontSize: 25,
          fontWeight: 'bold',
          textAlign: 'center',
          right: 100,
        }}>
        MyName
      </Text>
      <TouchableOpacity
        style={{marginTop: 10, marginLeft: 10}}
        onPress={() => props.navigation.openDrawer()}>
        <Ionicons
          style={{alignSelf: 'center', right: 100}}
          name="bars"
          size={25}
          color="black"
        />
      </TouchableOpacity>

      <DrawerContentScrollView {...props}>
        <View style={{flexDirection: 'row'}}>
          {/* 1 */}
          <View style={{flex: 2, flexDirection: 'column'}}>
            <Drawer.Section style={{marginTop: 15}}>
              <DrawerItem
                icon={({color, size}) => (
                  <Ionicons name="home" color={'green'} size={25} />
                )}
                label="HomePage"
                onPress={() => {
                  props.navigation.navigate('Home');
                }}
              />

              <View>
                <DrawerItem
                  icon={({color, size}) => (
                    <Ionicons name="home" color={'green'} size={25} />
                  )}
                  label="MenuArrow"
                  onPress={() => {
                    props.navigation.navigate('HomeArrow');
                  }}
                />
                <View
                  style={{
                    position: 'absolute',
                    zIndex: 1,
                    right: 20,
                    top: 6,
                  }}>
                  <Ionicons
                    name="caret-square-right"
                    size={30}
                    color="green"
                    onPress={() => {
                      props.navigation.navigate('HomeArrow');
                    }}
                  />
                </View>
                <DrawerItem
                  icon={({color, size}) => (
                    <Ionicons name="user-lock" color={'green'} size={25} />
                  )}
                  label="HomeArrow"
                  onPress={() => {
                    props.navigation.navigate('HomeArrow');
                  }}
                />
              </View>
            </Drawer.Section>
          </View>

          <Drawer.Section style={{marginTop: 15}}>
            <View style={{width: 200, height: 800, bottom: 70}}>
              <ScrollView>
                {/* <ScrollViewPage /> */}
                <Text style={styles.welcome}>1</Text>
                <Text style={styles.welcome}>2</Text>
                <Text style={styles.welcome}>3</Text>
                <Text style={styles.welcome}>4</Text>
                <Text style={styles.welcome}>5</Text>
                <Text style={styles.welcome}>6</Text>
                <Text style={styles.welcome}>7</Text>
                <Text style={styles.welcome}>8</Text>
                <Text style={styles.welcome}>9</Text>
                <Text style={styles.welcome}>10</Text>
                <Text style={styles.welcome}>a</Text>
                <Text style={styles.welcome}>b</Text>
                <Text style={styles.welcome}>c</Text>
                <Text style={styles.welcome}>d</Text>
                <Text style={styles.welcome}>e</Text>
                <Text style={styles.welcome}>a</Text>
                <Text style={styles.welcome}>b</Text>
                <Text style={styles.welcome}>c</Text>
                <Text style={styles.welcome}>d</Text>
                <Text style={styles.welcome}>e</Text>
                <Text style={styles.welcome}>a</Text>
                <Text style={styles.welcome}>b</Text>
                <Text style={styles.welcome}>c</Text>
                <Text style={styles.welcome}>d</Text>
                <Text style={styles.welcome}>e</Text>
              </ScrollView>
            </View>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: 'center',
    right: 100,
    borderRightColor: 'red',
    backgroundColor: 'red',
  },
  iconStyle: {
    width: 25,
    height: 25,
    marginHorizontal: 15,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  welcome: {
    // flex: 1,
    margin: 20,
    backgroundColor: 'orange',
    margin: 10,
    textAlign: 'center',
    fontSize: 20,
    paddingTop: 20,
  },
});
