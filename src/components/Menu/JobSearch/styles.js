import {StyleSheet} from 'react-native';

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
    margin: 20,
    backgroundColor: 'orange',
    margin: 10,
    textAlign: 'center',
    fontSize: 20,
    paddingTop: 20,
  },
});

export default styles;
