import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Loading from './Loading';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.yellowView}>
        <Text>
          상영아 
        </Text>
      </View>
      <View style={styles.blueView}>
        <Text style={styles.blueView}>
          ㅅㅇ아 롯데월드 가쟈
        </Text>
      </View>
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
