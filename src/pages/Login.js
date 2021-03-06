import React, { useState, useEffect } from 'react';
import { View, AsyncStorage, KeyboardAvoidingView, Platform, Image, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import logo from '../assets/logo.png';
import api from '../services/api';
export default function Login( { navigation } ) {

    const [ email, setEmail] = useState('');
    const [ techs, setTechs] = useState('');

    // useEffect executa uma acao assim que ele entra na tela
    useEffect(() => {
        AsyncStorage.getItem('user').then(user =>{
            if (user){
                navigation.navigate('List')
            }
        })
    }, []); // se eu encontrei a variavel user , armazeno na variavel user(cor laranja) ai navega para a pagina list

    async function handleSubmit(){
        const response = await api.post('/sessions',{
            email
        })

        const { _id } = response.data;
        
        //console.log('email: ',email,' - ','techs: ',techs,'_id: ', _id);

        await AsyncStorage.setItem('user', _id); //salva no banco de dados
        await AsyncStorage.setItem('techs', techs); //salva no banco de dados

        navigation.navigate('List') // se tudo der certo joga na pagina list
    }

    return (
        <KeyboardAvoidingView enabled={Platform.OS === 'ios'} style={styles.container}>
            <Image source={logo} />

            <View style={styles.form}>
                <Text style={styles.label}>SEU E-MAIL *</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Seu e-mail"
                    placeholderTextColor="#999"
                    keyboardType="email-address"
                    autoCaptalize="none"
                    autoCorrect={false}
                    value={email}
                    onChangeText={setEmail}
                />

                <Text style={styles.label}>TECNOLOGIAS *</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Tecnologias de interesse"
                    autoCaptalize="words"
                    autoCorrect={false}
                    placeholderTextColor="#999"
                    value={techs}
                    onChangeText={setTechs}
                />

                <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                    <Text style={styles.bottonText}>Encontrar Spots</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 30
    },

    label: {
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 8
    },

    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 20,
        borderRadius:2
    },

    button: {
        height: 42,
        backgroundColor:'#f05a5b',
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 2,
    },

    bottonText: {
        color: '#fffFFF',
        fontWeight: 'bold',
        fontSize: 16,
    }

});