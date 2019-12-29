import React from 'react';
import { View, Text, AsyncStorage, SafeAreaView } from 'react-native';

export default function Book({ navigation }) {
    const id = navigation.getParam('id');
    return( 
        <SafeAreaView>
            <Text>Pagina Book {id}</Text>
        </SafeAreaView>
    )
}