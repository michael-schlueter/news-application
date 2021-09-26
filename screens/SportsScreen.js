import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SportsScreen() {
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.text}>Sports</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        textAlign: 'center',
        padding: 10,
        backgroundColor: '#e0e0e0',
        border: '1px solid #bdbdbd',
    },
    text: {
        fontSize: 24,
    }
});