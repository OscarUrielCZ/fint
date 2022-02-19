import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
    const navigation = useNavigation();
    const goToScreen = name => {
        navigation.navigate(name);
    };

    return (
        <View>
            <Button title='Agregar egreso' onPress={() => goToScreen('egressFormScreen')} />
        </View>
    )
}
