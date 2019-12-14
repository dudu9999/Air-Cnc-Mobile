import React from 'react';
import { View, Image, Text } from 'react-native';
import logo from '../assets/logo.png';

export default function Login() {
    return <View>
        <Image source={logo} />
        <Text>Pagina Login</Text>
    </View>
}