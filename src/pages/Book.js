import React, { useState } from 'react';
import { SafeAreaView, Alert, StyleSheet, TextInput, TouchableOpacity, AsyncStorage, Text  } from 'react-native';
import api from '../services/api';

export default function Book({ navigation }) {
    const [ date, setDate ] = useState('');
    const id = navigation.getParam('id');

    async function handleSubmit(){
        const user_id = await AsyncStorage.getItem('user');

        await api.post(`/spots/${id}/bookings`, {
            date
        }, {
            headers: { user_id }
        })

        Alert.alert('solicitação de reserva enviada.');

        navigation.navigate('List');
    }

    function handleCancel(){

        navigation.navigate('List');
    }
    
    return( 
        <SafeAreaView style={styles.container}>
            <Text style={styles.label}>DATA DE INTERSSE *</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Qual data voce quer reservar?"
                    placeholderTextColor="#999"
                    keyboardType="words"
                    autoCaptalize="none"
                    autoCorrect={false}
                    value={date}
                    onChangeText={setDate}
                />
                
                <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                        <Text style={styles.bottonText}>Solicitar Reserva</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleCancel} style={[styles.button, styles.cancelButton]}>
                        <Text style={styles.bottonText}>Cancelar</Text>
                </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 30,
        marginTop: 70,
        
    },
    title:{
        fontSize: 20,
        color: '#444',
        paddingHorizontal: 20,
        marginBottom: 15,
    },
    bold:{ 
        fontWeight:'bold', 
    },
    list:{
        paddingHorizontal: 20,
    },    
    listItem:{ 
        marginRight: 15,
    },    
    thumbnail:{
        width: 200,
        height:120,
        resizeMode: 'cover',
        borderRadius: 2,
    },
    company:{
        fontSize: 24,
        fontWeight:'bold',
        color:'#333',
        marginTop:10,
    },
    price:{
        fontSize: 15,
        color: '#999',
        marginTop: 5,
    },

    button: {
        height: 42,
        backgroundColor:'#f05a5b',
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 2,
        marginTop:10,
    },
    
    bottonText: {
        color: '#fffFFF',
        fontWeight: 'bold',
        fontSize: 15,
    },
    cancelButton: {
        backgroundColor:'#ccc',
    },
    
});
