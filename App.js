import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Loading from './Loading';

export default function App() {
  return (
    <View style={styles.container}>
      <Loading />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  text: {
    color: 'black',
  },
  yellowView: {
    flex: 1,
    backgroundColor: 'yellow'
  },
  blueView: {
    flex: 3,
    backgroundColor: 'blue',
    color: 'white',
    fontSize: 100
  }
});
