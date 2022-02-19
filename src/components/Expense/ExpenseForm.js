import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function ExpenseForm() {
    return (
        <View>
            <Text>Fecha</Text>
            <Text>Categoría</Text>
            <TextInput placeholder='Descripción' />
            <Button title='Registrar' />
        </View>
    )
}
