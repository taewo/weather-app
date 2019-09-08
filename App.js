import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import Loading from './Loading';
import Weather from './Weather';
import * as Location from 'expo-location';
import axios from 'axios';

const API_KEY = "c67c57a128e07d749b79758feece5d6f";

export default class extends React.Component {
  state = {
    isLoading: true,
    condition: '',
    temp: null
  };

  getWeather = async(latitude, longitude) => {
    const { 
      data
      : {
        main: { temp },
        weather
      } 
    } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=c67c57a128e07d749b79758feece5d6f&units=metric`);
    this.setState({
      condition: weather[0].main,
      temp: temp,
      isLoading: false
    })
  }

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert('cant find yo', 'so sad')
    }

    
  }

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={"Dust"} />;
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
