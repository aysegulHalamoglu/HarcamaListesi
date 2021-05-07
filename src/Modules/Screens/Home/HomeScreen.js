import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { useDispatchChangeTheme, useTheme, useThemedValues, useThemedOption } from '../../Theming';


import styles from './Styles/HomeScreenStyles';
import CategoryItem from './Components/CategoryItem';
import Modal from 'react-native-modal';
import AddExpenseModal from './Components/AddExpenseModal';


const dummyCategories = [
    {
        categoryId: 1,
        categoryName: 'MARKET',
        color: 'green',
    },
    {
        categoryId: 2,
        categoryName: 'GİYİM',
        color: 'orange',
    },
    {
        categoryId: 3,
        categoryName: 'FATURALAR',
        color: 'blue',

    },
    {
        categoryId: 4,
        categoryName: 'YEME - İÇME',
        color: 'yellow',
    },
    {
        categoryId: 5,
        categoryName: 'EĞLENCE',
        color: 'black',
    },
    {
        categoryId: 6,
        categoryName: 'TEKNOLOJİ',
        color: 'lime'
    },
    {
        categoryId: 7,
        categoryName: 'KOZMETİK',
        color: 'pink',
    },
    {
        categoryId: 8,
        categoryName: 'HEDİYE',
        color: 'red'
    },
]


const HomeScreen = props => {



    return (
       <View style={styles.stackContainer}>
           <View style={styles.profileContainer}>
               <Text style={props.welcomeText}>Welcome</Text>
               <Text style={props.profileName}>Semih BULUT</Text>
           </View>
           <View style={styles.settingsContainer}>
                
           </View>
       </View>

    )
}



export default HomeScreen;