import React from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { capitalize } from 'lodash';

import { getMonthName } from '../../utils/utils';

export default function BudgetCard({id, month, year, missingExpenses=2500}) {
    const navigation = useNavigation();

    const monthName = getMonthName(month);

    return (
        <TouchableWithoutFeedback onPress={() => navigation.navigate('budgetDetailsScreen', { id:id })}>
            <View style={styles.card}>
                <View style={styles.bg}>
                    <View style={styles.spacing}>
                        <Text style={styles.date}>{capitalize(monthName)} {year}</Text>
                        <Text style={styles.money}>${missingExpenses} por gastar</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}


const styles = StyleSheet.create({
    card: {
        flex: 1,
        height: 100,
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    bg: {
        flex: 1,
        borderRadius: 10,
        backgroundColor: '#DFDFDF'
    },
    spacing: {
        marginHorizontal: 10,
        marginVertical: 15
    },
    date: {
        fontWeight: 'bold',
        fontSize: 15
    },
    money: {
        fontSize: 18,
        textAlign: 'right'
    }
});