import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text} from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import styles from '../Styles/AddExpenseModalStyles';


const AddExpenseModal = props => {

    const [itemName, setItemName] = useState('');
    const [itemPrice, setItemPrice] = useState('');
    const { itemDetail, setItemDetail } = useState('');

    const itemKey = props.route.params?.itemKey;

    useEffect(() => {
        props.navigation.setOptions({
            title: itemKey ? 'DÜZENLE' : 'YENİ EKLE'
        })
    }, []);

    useEffect(() => {
        if (itemKey) {
            getItemDetail(itemKey, item => {
                setItemName(item.title);
                setItemPrice(item.price);
                setItemDetail(item.detail);
            });
        }
    }, []);

    const _onPress_AddExpense = () => {
        const item = {
            key: itemKey,
            title: itemName,
            price: itemPrice,
            detail: itemDetail,
        }

        const onComplete = () => {
            props.navigation.goBack();
        }
        if (itemKey) {
            // itemKey varsa güncellemedir
            updateItem(item, onComplete);
        }
        else {
            // Yoksa yeni ekliyoruzdur
            addItem(item, onComplete);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputBox}>
                <TextInput style={styles.input}
                    label="Alınanlar"
                    mode="outlined"
                    placeholder="Harcama"
                    onChangeText={setItemName}
                    value={itemName}
                    placeholderTextColor="rgba(0,0,0,0.3)" />
            </View>
            <View style={styles.inputBox}>
                <TextInput style={styles.input}
                    label="Tutar"
                    mode="outlined"
                    placeholder="Harcama Tutarını Giriniz."
                    onChangeText={setItemPrice}
                    value={itemPrice}
                    placeholderTextColor="rgba(0,0,0,0.3)"
                    keyboardType="number-pad" />
            </View>
            <View style={styles.inputBox}>
                <TextInput 
                    label="Açıklama"
                    mode="outlined"
                    placeholder='Notunuzu ekleyiniz.'
                    onChangeText={setItemDetail}
                    value={itemDetail}
                    placeholderTextColor="rgba(0,0,0,0.3)" />
            </View>
            <TouchableOpacity style={styles.addButton} onPress={_onPress_AddExpense}>
                <Button color='red' mode="contained" onPress={() => console.log('Pressed')}>
                    Ekle
                </Button>
            </TouchableOpacity>
        </View>
    )
}


export default AddExpenseModal;