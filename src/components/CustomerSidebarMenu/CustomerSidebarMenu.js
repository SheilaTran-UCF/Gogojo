import React from 'react';
import {SafeAreaView, View, Image, Text} from 'react-native';
import {Drawer} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/FontAwesome5';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import styles from './styles';
import {PROFILE_IMAGE} from '../../utils';

export default function CustomerSidebarMenu(props) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Image source={{uri: PROFILE_IMAGE}} style={styles.sideMenuProfileIcon} />
      <Text
        style={{
          color: 'orange',
          fontSize: 25,
          fontWeight: 'bold',
          textAlign: 'center',
        }}>
        MyName
      </Text>
      <DrawerContentScrollView {...props}>
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
            <DrawerItem
              icon={({color, size}) => (
                <Ionicons name="home" color={'green'} size={25} />
              )}
              label="MenuList"
              onPress={() => {
                props.navigation.navigate('MenuList');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Ionicons name="home" color={'green'} size={25} />
              )}
              label="ScrollViewPage"
              onPress={() => {
                props.navigation.navigate('ScrollViewPage');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Ionicons name="home" color={'green'} size={25} />
              )}
              label="Personal"
              onPress={() => {
                props.navigation.navigate('Personal');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Ionicons name="home" color={'green'} size={25} />
              )}
              label="JobSearch"
              onPress={() => {
                props.navigation.navigate('JobSearch');
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Text
        style={{
          fontSize: 16,
          textAlign: 'center',
          color: 'grey',
        }}>
        www.aboutreact.com
      </Text>
    </SafeAreaView>
  );
}
