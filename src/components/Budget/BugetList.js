import React from 'react';
import { View, Text, FlatList } from 'react-native';

import { getBudgetList } from '../../services/buget';

import BudgetCard from './BudgetCard';

export default function BugetList() {
    const list =  getBudgetList();  

    return (
        <FlatList
            data={list}
            keyExtractor={(item) => item.id}
            renderItem={ ({item}) => <BudgetCard id={item.id} month={item.month} year={item.year} /> }
        />
    )
}
