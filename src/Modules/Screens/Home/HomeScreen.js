import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, TouchableHighlight, SafeAreaView, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Metrics, Fonts } from '../../Constants';
import {Svgs} from '../../Constants/'
import { createStackNavigator } from '@react-navigation/stack';
import { useDispatchChangeTheme, useTheme, useThemedValues, useThemedOption } from '../../Theming';


import styles from './Styles/HomeScreenStyles';
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

    const _onPress_Settings = () => {
        props.navigation.navigate('settings-screen')   
    };
    
    const _onPress_Calendar = () => {
        props.navigation.navigate('calendar-screen')
    };

    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor="#F1F2B5"
                barStyle="dark-content" />
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} colors={["#F1F2B5", "#C779D0", "#4BC0C8"]}
                        style={styles.container}>

                <View style={styles.stackContainer}>
                    <View style={styles.profileContainer}>
                        <Text style={styles.welcomeText}>Welcome</Text>
                        <Text style={styles.profileName}>Semih BULUT</Text>
                    </View>
                    <TouchableOpacity onPress={_onPress_Settings}>
                        <View style={styles.settingsIcon}>
                            <Svgs.SettingsIcon width="100%" height="100%"></Svgs.SettingsIcon>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.accountContainer}>
                    <TouchableOpacity onPress={_onPress_Calendar}>
                        <LinearGradient
                            start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} colors={['#EC0076', '#AB48E4', '#6754B7', '#5D9ACF', '#00DCFF']}
                            style={styles.budgetCard}>
                            <View style={styles.topCardContainer}>
                                <Text style={{ fontSize: 20, color: 'white', fontFamily: Fonts.Families.semibold }}>Net Bütçe</Text>
                                <Text style={{ fontSize: 45, color: 'white', fontFamily: Fonts.Families.semibold }}>₺ 860.00</Text>
                            </View>
                            <View style={styles.bottomCardContainer}>
                                <View style={styles.incomeExpenseContainer}>
                                    <Text style={{ fontSize: 20, color: 'white', fontFamily: Fonts.Families.semibold }}>Gelir</Text>
                                    <Text style={{ fontSize: 30, color: 'white', fontFamily: Fonts.Families.semibold }}>₺ 1580.00</Text>
                                </View>
                                <View style={styles.incomeExpenseContainer}>
                                    <Text style={{ fontSize: 20, color: 'white', fontFamily: Fonts.Families.semibold }}>Gider</Text>
                                    <Text style={{ fontSize: 30, color: 'white', fontFamily: Fonts.Families.semibold }}>₺ 720.00</Text>
                                </View>
                            </View>

                        </LinearGradient>

                    </TouchableOpacity>
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>HARCAMALARIM</Text>
                    <TouchableOpacity>
                        <Text style={styles.textButton}>Tümünü Gör</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.flatListContainer}>

                </View>
                <View style={styles.tabNavigationContainer}>
                    <Svgs.MenuIcon width="40%" height="40%"></Svgs.MenuIcon>
                    <View style={styles.addButtonContainer}>
                        <Svgs.AddIcon width="100%" height="100%"></Svgs.AddIcon>
                    </View>
                    <Svgs.ChartTabIcon width="40%" height="40%"></Svgs.ChartTabIcon>
                </View>
                <View style={styles.addButtonContainer}>
                <Svgs.AddIcon width="100%" height="100%"></Svgs.AddIcon>
                </View>
            </LinearGradient>
        </View>

    )
}



export default HomeScreen;