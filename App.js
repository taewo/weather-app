import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import Loading from './Loading';
import Weather from './Weather';
import * as Location from 'expo-location';
import axios from 'axios';

const API_KEY = "c67c57a128e07d749b79758feece5d6f";

export default class extends React.Component {
  state = {
    isLoading: true
  };

  getWeather = async(latitude, longitude) => {
    const { 
      data
      : {
        main: { temp },
        weather
      } 
    } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=c67c57a128e07d749b79758feece5d6f&units=metric`);
    console.log('data', temp);
    this.setState({
      isLoading: false,
      condition: weather[0].main,
      temp: temp
    })
  }

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      console.log(1, latitude, longitude)
      this.getWeather(latitude, longitude);
      this.setState({ isLoading: false });
    } catch (error) {
      Alert.alert('cant find yo', 'so sad')
    }

    
  }

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading, temp, condition } = this.state;
    // return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} />;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
