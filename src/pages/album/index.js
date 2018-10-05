import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const Album = () => (
  <View style={styles.container}>
    <Text>Album details</Text>
  </View>
);

Album.navigationOptions = {
  title: 'Album',
};

Album.navigationOptions = ({ navigation }) => ({
  title: navigation.state.params.album.title,
});

export default Album;
