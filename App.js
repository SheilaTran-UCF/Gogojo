import React, {useEffect, useState} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {View, TouchableOpacity, Dimensions} from 'react-native';

import {Resume, FunctionMenu} from './src/components/Position';

import {
  Portrait,
  LandsCape,
  ScrollViewPage,
  CustomerSidebarMenu,
} from './src/components';

import {
  MenuList,
  JobSearch,
  Internship,
  Training,
  Learning,
  Personal,
  Information,
  Searching,
  InforText,
} from './src/components/Menu';

const {height, width} = Dimensions.get('window');

const Drawer = createDrawerNavigator();

export default function App() {
  const [orientation, setOrientation] = useState('PORTRAIT');
  const [info, setInfo] = useState({
    name: '',
    dob: '',
    sex: '',
    phone: '',
    email: '',
    marriage: '',
  });

  useEffect(() => {
    Dimensions.addEventListener('change', ({window: {width, height}}) => {
      if (width < height) {
        setOrientation('PORTRAIT');
      } else {
        setOrientation('LANDSCAPE');
      }
    });
    return orientation;
  }, []);

  return (
    <NavigationContainer
      style={{
        width: width / 2,
        height: height,
        backgroundColor: 'grey',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          top: 5,
        }}>
        <TouchableOpacity
          style={{right: 10}}
          onPress={() => props.navigation.closeDrawer()}>
          {/* <Ionicons name="bars" size={25} color="black" /> */}
        </TouchableOpacity>
      </View>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerStyle={{
          width: width / 2,
          height: height,
          backgroundColor: 'white',
        }}
        drawerContent={props => <CustomerSidebarMenu {...props} />}>
        {/* <Icon name="rocket" size={30} color="#900" /> */}
        <Drawer.Screen
          name="Home"
          component={Portrait}
          // options={{headerShown: null}}
        />

        <Drawer.Screen
          name="Notifications"
          component={LandsCape}
          options={{headerShown: null}}
        />
        <Drawer.Screen
          name="Function"
          component={FunctionMenu}
          options={{headerShown: null}}
        />
        <Drawer.Screen
          name="Searching"
          component={Searching}
          option={{headerShown: null}}
        />

        <Drawer.Screen
          name="MenuList"
          component={MenuList}
          options={{headerShown: null}}
        />
        <Drawer.Screen
          name="Information"
          component={Information}
          options={{headerShown: null}}
          initialParams={{info}}
        />
        <Drawer.Screen
          name="Learning"
          component={Learning}
          option={{headerShown: null}}
        />
        <Drawer.Screen
          name="Personal"
          component={Personal}
          option={{headerShown: null}}
          initialParams={{info, setInfo}}
        />
        <Drawer.Screen
          name="Training"
          component={Training}
          option={{headerShown: null}}
        />
        <Drawer.Screen
          name="Internship"
          component={Internship}
          option={{headerShown: null}}
        />

        <Drawer.Screen
          name="ScrollViewPage"
          component={ScrollViewPage}
          options={{headerShown: null}}
        />
        <Drawer.Screen
          name="JobSearch"
          component={JobSearch}
          options={{headerShown: null}}
        />
        <Drawer.Screen
          name="Resume"
          component={Resume}
          options={{headerShown: null}}
        />
        <Drawer.Screen
          name="InforText"
          component={InforText}
          options={{headerShown: null}}
          // initialParams={{info}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
