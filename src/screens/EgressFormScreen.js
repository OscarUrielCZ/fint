import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Ionicons as Icon } from '@expo/vector-icons';
import {Picker} from '@react-native-picker/picker';

import firebase from '../utils/db';

export default function EgressFormScreen() {
    const [showCalendar, setShowCalendar] = useState(false);
    // const [type, setType] = useState('');
    const [egress, setEgress] = useState({
        descripcion: '',
        quantity: '',
        date: '',
        type: '',
        category: ''
    });

    const onDateChange = (event, selectedDate) => {
        console.log(selectedDate);
        setShowCalendar(false);
    };

    const saveEgress = async () => {
        console.log(egress);
        // firebase.firestore().collection("expenses").add(egress);
        // await firebase.database().ref("expenses").add(egress);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Nuevo egreso</Text>
            <View style={styles.form}>
                <View>
                    <TextInput style={styles.entry} placeholder='Descripción'/>
                </View>
                <View>
                    <TextInput style={styles.entry} placeholder='Cantidad' />
                </View>
                <View style={styles.calendar}>
                    <TextInput value={egress.date} placeholder='Fecha' style={{fontSize: 16}} />
                    <Icon
                        name='calendar'
                        onPress={() => setShowCalendar(true)}
                        size={24}
                        style={{
                            marginLeft: 'auto'
                        }}
                        color='#AFAFAF'
                        />
                </View>
                <View style={styles.picker}>
                    <Picker
                        selectedValue={egress.type}
                        onValueChange={(itemValue, itemIndex) => {
                            setEgress({...egress, type: itemValue})
                        }}
                    >
                        <Picker.Item label="-- Tipo --" value="" />
                        <Picker.Item label="Gasto" value="expense" />
                        <Picker.Item  label="Inversión" value="inversion" />
                        <Picker.Item  label="Prestamo" value="loan" />
                    </Picker>
                </View>
                <View style={styles.picker}>
                    <Picker
                        selectedValue={egress.category}
                            onValueChange={(itemValue, itemIndex) => {
                                setEgress({...egress, category: itemValue});
                            }}
                        >
                        <Picker.Item label="-- Categoría --" value="" />
                        <Picker.Item label="Gastos" value="expense" />
                        <Picker.Item  label="Transporte" value="transportation" />
                        <Picker.Item  label="Seguros" value="insurance" />
                    </Picker>
                </View>
                <Button title='Guardar' onPress={() => saveEgress()} />
            </View>

            {showCalendar && 
                <DateTimePicker
                    mode='date'
                    value={new Date()}
                    onChange={onDateChange}
                />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
    }, 
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 20
    },
    form: {
        marginTop: 50   
    },
    formgroup: {
        flexDirection: 'row'
    },
    label: {
        width: '30%'
    },
    entry: {
        paddingHorizontal: 8,
        paddingVertical: 5,
        marginVertical: 8,
        fontSize: 16,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#AFAFAF'
    },
    calendar: {
        flexDirection: 'row',
        paddingHorizontal: 8,
        paddingVertical: 5,
        marginVertical: 8,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#AFAFAF'
    },
    picker: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#AFAFAF',
        marginTop: 8,
        marginBottom: 8
    }
});