import React from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Drawer} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

import Ionicons from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';
import {PROFILE_IMAGE} from '../../../utils';

export default function JobSearch(props) {
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
        <Text style={{alignItems: 'center', top: 50, fontSize: 30}}>
          Job Search
        </Text>
      </TouchableOpacity>

      <DrawerContentScrollView {...props}>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 2, flexDirection: 'column'}}>
            <Drawer.Section style={{marginTop: 15}}>
              <View>
                <DrawerItem
                  label="Home"
                  onPress={() => {
                    props.navigation.navigate('Home');
                  }}
                  icon={({color, size}) => (
                    <Ionicons name="home" color={'green'} size={25} />
                  )}
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
                      props.navigation.navigate('MenuArrow');
                    }}
                  />
                </View>
              </View>
              <TouchableOpacity
                style={{flexDirection: 'row'}}
                onPress={() => {
                  props.navigation.navigate('Function');
                }}>
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

              <DrawerItem
                icon={({color, size}) => (
                  <Ionicons name="user-lock" color="green" size={25} />
                )}
                label="MenuArrow"
                onPress={() => {
                  props.navigation.navigate('MenuArrow');
                }}
              />
            </Drawer.Section>
          </View>

          <Drawer.Section style={{marginTop: 15}}>
            <View style={{width: 200, height: 800}}>
              <ScrollView>
                <Text style={styles.welcome}>a</Text>
                <Text style={styles.welcome}>b</Text>
                <Text style={styles.welcome}>c</Text>
                <Text style={styles.welcome}>d</Text>
                <Text style={styles.welcome}>e</Text>
                <Text style={styles.welcome}>f</Text>
                <Text style={styles.welcome}>g</Text>
                <Text style={styles.welcome}>h</Text>
                <Text style={styles.welcome}>d</Text>
                <Text style={styles.welcome}>i</Text>
                <Text style={styles.welcome}>j</Text>
                <Text style={styles.welcome}>k</Text>
                <Text style={styles.welcome}>l</Text>
                <Text style={styles.welcome}>m</Text>
                <Text style={styles.welcome}>n</Text>
                <Text style={styles.welcome}>o</Text>
                <Text style={styles.welcome}>p</Text>
                <Text style={styles.welcome}>q</Text>
                <Text style={styles.welcome}>r</Text>
                <Text style={styles.welcome}>s</Text>
                <Text style={styles.welcome}>t</Text>
                <Text style={styles.welcome}>u</Text>
                <Text style={styles.welcome}>v</Text>
                <Text style={styles.welcome}>w</Text>
                <Text style={styles.welcome}>x</Text>
              </ScrollView>
            </View>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
    </SafeAreaView>
  );
}
