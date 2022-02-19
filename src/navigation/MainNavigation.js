import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import BudgetNavigation from './BudgetNavigation';
import HomeNavigation from './HomeNavigation';
import AccountScreen from '../screens/AccountScreen';

const Tab = createBottomTabNavigator();

export default function MainNavigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name='budgetNav' component={BudgetNavigation} options={{
                title: 'Presupuestos'
            }} />
            <Tab.Screen name='homeNav' component={HomeNavigation} options={{
                title: 'Inicio'
            }} />
            <Tab.Screen name='accountScreen' component={AccountScreen} />
        </Tab.Navigator>
    );
}
