import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, TextInput} from 'react-native';
import { useThemedValues } from '../../../Theming';

import styles from '../Styles/AddExpenseModalStyles';


const AddExpenseModal = props => {


    const [itemName, setItemName] = useState('');
    const [itemPrice, setItemPrice] = useState('');
    const { itemDetail, setItemDetail } = useState('');

    

    return (
        <View style={styles.container}>
            <View style={styles.inputBox}>
                <TextInput style={styles.input}
                    placeholder="Harcama"
                    onChangeText={setItemName}
                    value={itemName}
                    placeholderTextColor="rgba(0,0,0,0.3)" />
            </View>
            <View style={styles.inputBox}>
                <TextInput style={styles.input}
                    placeholder="Harcama Tutarını Giriniz."
                    onChangeText={setItemPrice}
                    value={itemPrice}
                    placeholderTextColor="rgba(0,0,0,0.3)"
                    keyboardType="number-pad" />
            </View>
            <View style={styles.inputBox}>
                <TextInput
                    placeholder='Notunuzu ekleyiniz.'
                    onChangeText={setItemDetail}
                    value={itemDetail}
                    placeholderTextColor="rgba(0,0,0,0.3)" />
            </View>
        </View>
    )
}


export default AddExpenseModal;