import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';

class ProfileScreen extends PureComponent {

  static navigationOptions = {
    title: 'Profile',
  }

  render() {
    return (
      <View><Text>This is the profile screen This is the profile screen This is the profile screen This is the profile screen</Text></View>
    );
  }
}

export default ProfileScreen;
