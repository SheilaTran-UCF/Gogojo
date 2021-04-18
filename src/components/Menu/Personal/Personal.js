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
                <Text style={styles.textName}>Full Name*</Text>
                <TextInput
                  style={styles.text}
                  onChangeText={text => setInfo({...info, fullname: text})}
                  value={info.fullname}
                  placeholder={'emter any value'}
                  name="fullname"
                />
                <Text style={styles.textName}>Day of birth*</Text>
                <TextInput
                  style={styles.text}
                  onChangeText={value => setInfo({...info, dob: value})}
                  placeholder={'emter any value'}
                  value={info.dob}
                  keyboardType={'number-pad'}
                />

                <Text style={styles.textName}>Sex*</Text>
                <View style={styles.text}>
                  <RNPickerSelect
                    placeholder={{}}
                    items={[
                      {
                        label: 'Select',
                        value: '',
                      },
                      {
                        label: 'Male',
                        value: 'male',
                      },
                      {
                        label: 'Female',
                        value: 'female',
                      },
                    ]}
                    onValueChange={value => {
                      setInfo({
                        ...info,
                        sex: value,
                      });
                    }}
                    style={styles.picker}
                    value={info.sex}
                  />
                </View>
                <Text style={styles.textName}>Phone Number*</Text>
                <TextInput
                  name="phone"
                  style={styles.text}
                  onChangeText={text => setInfo({...info, phone: text})}
                  value={info.phone}
                />

                <Text style={styles.textName}>Email*</Text>
                <TextInput
                  name="email"
                  style={styles.text}
                  onChangeText={text => setInfo({...info, email: text})}
                  value={info.email}
                />
                <Text style={styles.textName}>Marriage ?*</Text>

                {/* <TextInput
                  name="education"
                  style={styles.text}
                  onChangeText={text => setInfo({...info, marriage: text})}
                  value={info.marriage}
                /> */}

                <View style={styles.text}>
                  <RNPickerSelect
                    placeholder={{}}
                    items={[
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
                    ]}
                    onValueChange={value => {
                      setInfo({
                        ...info,
                        marrigage: value,
                      });
                    }}
                    style={styles.picker}
                    value={info.sex}
                  />
                </View>
                <Text style={styles.textName}>Education</Text>

                <TextInput
                  name="marriage"
                  style={styles.text}
                  onChangeText={text => setInfo({...info, education: text})}
                  value={info.education}
                />
                <Text style={styles.textName}>Health</Text>
                <TextInput
                  name="heatlth"
                  style={styles.text}
                  onChangeText={text => setInfo({...info, health: text})}
                  value={info.health}
                />
                <Text style={styles.textName}>Insurace</Text>
                <TextInput
                  name="insurance"
                  style={styles.text}
                  onChangeText={text => setInfo({...info, insurance: text})}
                  value={info.insurance}
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
