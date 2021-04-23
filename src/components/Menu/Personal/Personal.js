import React, {useState} from 'react';
const {width} = Dimensions.get('window');
import {Avatar} from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';
import Ionicons from 'react-native-vector-icons/FontAwesome5';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  TextInput,
  ScrollView,
} from 'react-native';
import {styles} from './style';
import CustomInput from '../../../ui/CustomInput';
import CustomPicker from '../../../ui/CustomPicker';

const pickerOptions = [
  {
    label: 'Select',
    value: '',
  },
  {
    label: 'Yes',
    value: 'yes',
  },
  {
    label: 'No',
    value: 'no',
  },
];
const pickerOptions1 = [
  {
    label: 'Select',
    value: '',
  },
  {
    label: 'Female',
    value: 'Female',
  },
  {
    label: 'Male',
    value: 'Male',
  },
];

export default function Personal({route, navigation}) {
  const {height, width} = Dimensions.get('window');
  const [info, setInfo] = useState({
    fullname: '',
    dob: null,
    sex: '',
    phone: '',
    email: '',
    marriage: '',
    education: '',
    health: '',
    insurance: '',
  });

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Personal Information</Text>
        <TouchableOpacity
          style={styles.barMenu}
          onPress={() => navigation.navigate('Home')}>
          <Ionicons name="bars" size={25} color="white" />
        </TouchableOpacity>
      </View>
      <ImageBackground
        style={styles.backgroundImage}
        blurRadius={1}
        resizeMode="stretch"
        source={require('../../../assets/mapvietnam.png')}>
        <View style={styles.container}>
          <View style={styles.userInfo}>
            <Avatar.Image source={require('../../../assets/avatar.jpeg')} />
            <Text style={styles.name}>MyName</Text>
          </View>
          <View>
            <View style={{height: 600, width: 370}}>
              <ScrollView>
                {/* <View> */}
                {/* Truyen prop nhu the nay cho tat ca cac field */}
                <CustomInput
                  _value={info.fullname}
                  _onChangeText={text => setInfo({...info, fullname: text})}
                  title="Name *"
                  name="name"
                  phd="Enter name"
                />

                <CustomInput
                  _value={info.dob}
                  _onChangeText={text => setInfo({...info, dob: text})}
                  title="Day of birth *"
                  name="name"
                  phd="Enter name"
                />

                {/**SEX */}

                <CustomPicker
                  title="Sex"
                  pickerOptions={pickerOptions1}
                  _value={info.sex}
                  _onValueChange={v => setInfo({...info, sex: v})}
                />

                <CustomInput
                  _value={info.phone}
                  //   keyboardType="number-pad"
                  _onChangeText={text => setInfo({...info, phone: text})}
                  title="Phone Number*"
                  name="name"
                  phd="Enter name"
                />

                <CustomInput
                  _value={info.email}
                  //   keyboardType="number-pad"
                  _onChangeText={text => setInfo({...info, email: text})}
                  title="Email*"
                  name="name"
                  phd="Enter name"
                />

                {/**Marriage */}
                <CustomPicker
                  pickerOptions={pickerOptions}
                  title="Marriage *"
                  _value={info.marriage}
                  _onValueChange={v => setInfo({...info, marriage: v})}
                />

                <CustomInput
                  _value={info.education}
                  keyboardType="number-pad"
                  _onChangeText={text => setInfo({...info, education: text})}
                  title="Education*"
                  name="name"
                  phd="Enter name"
                />

                <CustomInput
                  _value={info.health}
                  keyboardType="number-pad"
                  _onChangeText={text => setInfo({...info, health: text})}
                  title="Health*"
                  name="name"
                  phd="Enter name"
                />

                <CustomInput
                  _value={info.insurance}
                  keyboardType="number-pad"
                  _onChangeText={text => setInfo({...info, insurance: text})}
                  title="Insurance*"
                  name="name"
                  phd="Enter name"
                />

                <TouchableOpacity
                  style={styles.touch}
                  // onPress={() => navigation.openDrawer()}>
                  onPress={() => {
                    navigation.navigate('Information', {
                      info,
                    });
                  }}>
                  <Text style={{color: 'white'}}>Continous</Text>
                </TouchableOpacity>
                {/* </View> */}
              </ScrollView>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
