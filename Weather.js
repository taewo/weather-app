import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function Weather({temp}) {
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#4c669f', '#3b5998', '#192f6a']}
                style={{ padding: 15, alignItems: 'center', borderRadius: 5 }}
            >
                <View style={styles.halfContainer}>
                    <MaterialCommunityIcons size={86} name='weather-lightning-rainy' />
                    <Text style={styles.temp}>{temp}</Text>
                </View>
                <View style={styles.halfContainer} />
            </LinearGradient>
        </View>
    )
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        'Thunderstorm',
        'Drizzle',
        'Rain',
        'Snow',
        'Atmosphere',
        'Clear',
        'Clouds',
        'Haze',
    ]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    temp: {
        fontSize: 36
    },
    halfContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})