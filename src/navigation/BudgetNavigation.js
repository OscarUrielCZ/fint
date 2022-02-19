import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BudgetScreen from '../screens/BudgetScreen';
import BudgetDetailsScreen from '../screens/BudgetDetailsScreen';

const Stack = createNativeStackNavigator();

export default function BudgetNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='budgetScreen' component={BudgetScreen} options={{
                headerShown: false
            }} />
            <Stack.Screen name='budgetDetailsScreen' component={BudgetDetailsScreen} options={{
                headerShown: false
            }} />
        </Stack.Navigator>
    )
}
