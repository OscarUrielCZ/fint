import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { capitalize } from 'lodash';

import { getBudgetDetails } from '../services/buget';
import { getMonthName } from '../utils/utils';
import ExpenseCard from '../components/Expense/ExpenseCard';

export default function BudgetDetailsScreen({navigation, route: {params}}) {
    const budget = getBudgetDetails(params.id);
    const monthName = getMonthName(budget.month);

    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.titleSection}>Detalles generales</Text>
                <Text style={styles.monthYear}>{capitalize(monthName)} {budget.year}</Text>
                <View style={styles.statContainer}>
                    <View style={styles.nameContainer}>
                        <Text style={styles.name}>Ingresos</Text>
                    </View>
                    <View style={styles.valueContainer}>
                        <TextInput style={styles.value}>$16,000</TextInput>
                    </View>
                </View>
                <View style={styles.statContainer}>
                    <View style={styles.nameContainer}>
                        <Text style={styles.name}>Egresos</Text>
                    </View>
                    <View style={styles.valueContainer}>
                        <TextInput style={styles.value}>$5,000</TextInput>
                    </View>
                </View>
                <View style={styles.statContainer}>
                    <View style={styles.nameContainer}>
                        <Text style={styles.name}>Restante</Text>
                    </View>
                    <View style={styles.valueContainer}>
                        <TextInput style={styles.value}>$11,000</TextInput>
                    </View>
                </View>
            </View>
            <View style={styles.expensesContainer}>
                <Text style={styles.titleSection}>Gastos del mes</Text>
                <View>
                    <ExpenseCard />
                    <ExpenseCard />
                    <ExpenseCard />
                    <Button title='Agregar gasto' />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 250,
        padding: 10
    },
    titleSection: {
        fontWeight: 'bold',
        fontSize: 18
    },
    monthYear: {
        marginVertical: 15,
        fontSize: 28,
        textAlign: 'right'
    },
    statContainer: {
        flexDirection: 'row',
        paddingVertical: 5
    },
    nameContainer: {
        width: '30%'
    },
    name: {
        fontSize: 22
    },
    valueContainer: {
        width: '70%'
    },
    value: {
        fontSize: 22,
        borderBottomWidth: 1,
        borderBottomColor: '#00f'
    },
    expensesContainer: {
        paddingHorizontal: 10
    }
});