import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import EgressFormScreen from '../screens/EgressFormScreen';

const Stack = createNativeStackNavigator();

export default function HomeNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='homeScreen' component={HomeScreen} options={{
                headerShown: false
            }} />
            <Stack.Screen name='egressFormScreen' component={EgressFormScreen} options={{
                headerShown: false
            }} />
        </Stack.Navigator>
    )
}
