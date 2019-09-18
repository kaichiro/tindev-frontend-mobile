import React, { useState } from 'react';
import {
    // View,
    Platform,
    KeyboardAvoidingView,
    // StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    Text,
} from 'react-native';

import logo from '../../assets/logo.png';
import api from '../../services/api';
import styles from './Styles';

export default function Login({ navigation }) {
    const [user, setUser] = useState('');

    async function handleLogin() {
        const response = await api.post('/devs', { username: user });
        const { _id } = response.data
        navigation.navigate('Main', { _id });
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
            enabled={Platform.OS === "ios"}
        >
            <Image source={logo} />
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Digite seu usuário do GitHub"
                placeholderTextColor="#999"
                style={styles.input}
                value={user}
                onChangeText={setUser}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={handleLogin}
            >
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#f5f5f5',
//         justifyContent: 'center',
//         alignItems: 'center',
//         padding: 30,
//     },

//     input: {
//         height: 46,
//         alignSelf: 'stretch',
//         borderWidth: 1,
//         borderColor: '#ddd',
//         borderRadius: 4,
//         marginTop: 20,
//         paddingHorizontal: 15,
//     },

//     button: {
//         height: 46,
//         alignSelf: 'stretch',
//         backgroundColor: '#DF4723',
//         borderRadius: 4,
//         marginTop: 10,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },

//     buttonText: {
//         color: '#FFF',
//         fontWeight: 'bold',
//         fontSize: 16,
//     },
// });
