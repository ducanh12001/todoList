import React, { useState } from 'react'
import LoginScreen from './src/component/LoginScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/component/Home';
import RegisterScreen from './src/component/RegisterScreen';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();

function AppStack() {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    )
}

function AuthStack() {
    return (
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
    )
}

export const MainStackNavigator = () => {
    const user = useSelector(state => state.auth.user);
    return (
        <>
        {user? <AppStack /> : <AuthStack />}
        </>
    )
}