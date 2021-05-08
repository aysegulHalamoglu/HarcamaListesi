import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-gradient';
import { Metrics, Fonts } from '../../../Constants';
import styles from '../Styles/BudgetCardStyles';

const BudgetCard = props => {

    return (
        <View>
            <TouchableOpacity>
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

    )
};

export default BudgetCard;
