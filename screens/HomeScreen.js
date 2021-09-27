import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { flex } from 'styled-system';
import { Divider, NativeBaseProvider, FlatList, ScrollView, Image, Spinner } from 'native-base';
import { services } from '../services/services';

export default function HomeScreen() {

    const [newsData, setNewsData] = useState([]);
    
    useEffect(() => {
        services('general')
            .then(data => {
                setNewsData(data)
            })
            .catch(error => {
                alert(error)
            })
    }, []);

    return (
        <NativeBaseProvider>
            <View>
                <View style={styles.container}>
                    <Text style={styles.text}>Home</Text>
                </View>
                <View>
                    <View style={styles.flex}>
                        <Text style={styles.title}>Title</Text>
                        <Text style={styles.date}>Date</Text>
                    </View>
                    <View style={styles.description}>
                        <Text style={styles.title}>Description</Text>
                    </View>
                </View>
                <Divider my={2} bg="#e0e0e0" />
                <View>
                    <View style={styles.flex}>
                        <Text style={styles.title}>Title</Text>
                        <Text style={styles.date}>Date</Text>
                    </View>
                    <View style={styles.description}>
                        <Text style={styles.title}>Description</Text>
                    </View>
                </View>
                <Divider my={2} bg="#e0e0e0" />
                <View>
                    <View style={styles.flex}>
                        <Text style={styles.title}>Title</Text>
                        <Text style={styles.date}>Date</Text>
                    </View>
                    <View style={styles.description}>
                        <Text style={styles.title}>Description</Text>
                    </View>
                </View>
                <Divider my={2} bg="#e0e0e0" />
                <View>
                    <View style={styles.flex}>
                        <Text style={styles.title}>Title</Text>
                        <Text style={styles.date}>Date</Text>
                    </View>
                    <View style={styles.description}>
                        <Text style={styles.title}>Description</Text>
                    </View>
                </View>
                <Divider my={2} bg="#e0e0e0" />
            </View>
        </NativeBaseProvider>
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
    },
    flex: {
        display: flex,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
    },
    title: {
        fontSize: 20,
    },
    date: {
        fontSize: 20,
    },
    description: {
        padding: 20,
    }
});