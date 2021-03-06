import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeBaseProvider, FlatList, ScrollView, Image, Spinner } from 'native-base';
import { Divider } from 'react-native-elements';
import { services } from '../services/services';
import moment from 'moment';

export default function TechScreen() {

    const [newsData, setNewsData] = useState([]);
    
    useEffect(() => {
        services('technology')
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
                {newsData.length > 1 ? (
                <FlatList
                    data={newsData}
                    renderItem={({ item }) => (
                       <View>
                           <View style={styles.newsContainer}>
                               <Image
                                width={550}
                                height={250}
                                resizeMode={"cover"}
                                source={{
                                    uri: item.urlToImage,
                                }}
                                />
                                <Text style={styles.title}>
                                    {item.title}
                                </Text>
                                <Text style={styles.date}>
                                    {moment(item.publishedAt).format('LLL')}
                                </Text>
                                <Text style={styles.newsDescription}>
                                    {item.description}
                                </Text>
                                <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
                                    <Text style={styles.newsLink}>
                                        Weiterlesen
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <Divider orientation="horizontal" />
                       </View> 
                    )}
                    keyExtractor={(item) => item.id}
                />
                ) : (
                    <View style={styles.spinner}>
                        <Spinner color="danger.400" />
                    </View>
                )}
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
    spinner: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 400,
    },
    newsLink: {
        fontSize: 16,
        marginTop: 10,
        color: "blue",
    },
});