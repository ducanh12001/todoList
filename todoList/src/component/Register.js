import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Register = () => {
    const navigation = useNavigation()

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const doRegister = () => {
        
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>TODO LIST</Text>
            <TextInput
                style={styles.input}
                placeholder='Enter username'
                value={username}
                onChangeText={text => setUsername(text)}
            />
            <TextInput
                style={styles.input}
                placeholder='Enter password'
                value={password}
                onChangeText={text => setPassword(text)}
                secureTextEntry
            />
            <Button style={styles.button} icon="login" mode="contain" onPress={doRegister}>
                Register
            </Button>
            <Button color="green" mode="contain" onPress={() => navigation.navigate("Login")}>
                Back to login
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header : {
        fontSize : 30,
        fontWeight : 'bold',
        color : 'blue'
    },
    input : {
        margin: 15,
        padding: 10,
        height: 50,
        width: '70%',
        borderWidth: 1,
        fontSize: 16
    },
    button : {
        backgroundColor: 'lightgray',
        borderWidth: 2,
        borderColor: 'black',
        marginVertical: 10 
    }
}) 

export default Register