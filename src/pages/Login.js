import React from 'react';
import { View, KeyboardAvoidingView, Platform, Image, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import logo from '../assets/logo.png';

export default function Login() {
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
                />

                <Text style={styles.label}>TECNOLOGIAS *</Text>

                <TextInput 
                    style={styles.input}
                    placeholder="Tecnologias de interesse"
                    autoCaptalize="words"
                    autoCorrect={false}
                    placeholderTextColor="#999"
                />

                <TouchableOpacity style={styles.button}>
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
        marginBottom: 2,
        borderRadius:2
    },

    button: {
        height: 42,
        backgroundColor:'#f05a5b',
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 2,
        color: '#fff',

    },

    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    }

});