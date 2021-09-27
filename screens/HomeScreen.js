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
            <ScrollView height={850}>
                <FlatList
                    data={newsData}
                    renderItem={({ item }) => (
                       <View>
                           <View style={styles.newsContainer}>
                                <Text style={styles.title}>
                                    {item.title}
                                </Text>
                                <Text style={styles.date}>
                                    {item.publishedAt}
                                </Text>
                                <Text style={styles.newsDescription}>
                                    {item.description}
                                </Text>
                            </View>
                       </View> 
                    )}
                    keyExtractor={(item) => item.id}
                />
            </ScrollView>
        </NativeBaseProvider>
    )
}

const styles = StyleSheet.create({
    newsContainer: {
        padding: 10,
    },
    title: {
        fontSize: 18,
        marginTop: 10,
        fontWeight: "600",
    },
    newsDescription: {
        fontSize: 16,
        marginTop: 10,
    },
    date: {
        fontSize: 14,
    },
});