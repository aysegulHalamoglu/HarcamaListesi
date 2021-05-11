import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View, StatusBar } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { addItem, getItemDetail, updateItem } from '../API/Firebase';
import { useLocalization, Texts} from '../../../Localization';

//Assets
import {Svgs} from '../../../Constants';
import styles from '../Styles/AddEditScreenStyles';

const AddEditScreen = props => {

    const [ itemName, setItemName ] = useState('');
    const [ itemCount, setItemCount ] = useState('');
    const [ itemDetail, setItemDetail ] = useState('');
    const [ itemDate, setItemDate ] = useState('');
    const [ itemIsBought, setItemIsBought ] = useState(false);
    const loc = useLocalization();

    // Edit ekranı için gelen item'in id'si (eğer bir şey gönderilmemişse params: undefined oluyor)
    const itemKey = props.route.params?.itemKey;

    // Ekran ilk açıldığında title'ı belirlensin
    useEffect(() => {
        props.navigation.setOptions({
            title: itemKey ? 'DÜZENLE' : 'YENİ EKLE'
        })
    }, []);

    // Ekrana gelen bir itemKey varsa, item'in detayları çekilsim
    useEffect(() => {
        if (itemKey) {
            getItemDetail(itemKey, item => {
                // Gelen item'in özelliklerini state'e atalım
                setItemName(item.title);
                setItemCount(item.count);
                setItemDetail(item.detail);
                setItemDate(item.date);
                setItemIsBought(item.isBought);
            });
        }
    }, []);

    const _onPress_AddEdit = () => {
        // State'teki değerlerden yeni bir item nesnesi oluşturalım
        const item = {
            key: itemKey,
            title: itemName,
            count: itemCount,
            detail: itemDetail,
            date: itemDate,
            isBought: itemIsBought,
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

    const _onPress_CloseModal = () => {
        props.navigation.navigate('home-screen')
    }


    return (
        <View style={styles.maincontainer}>
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} 
                            colors={["#FFFFFF", "#FFE1E1"]}
                            style={styles.maincontainer}>
                <TouchableOpacity style={styles.exitButtonContainer} onPress={_onPress_CloseModal}>
                    <Svgs.CloseModalIcon width="40%" height="40%"></Svgs.CloseModalIcon>
                </TouchableOpacity>
                <View style={styles.container}>
                    <View style={styles.leftContainer}>
                        <Text style={styles.verticalTitle}>{loc.t(Texts.verticalTitle)}</Text>
                    </View>
                    <View style={styles.rightContainer}>
                        
                        <View style={styles.categoriesButtonContainer}>
                            <Text style={styles.categoryTitle}>{loc.t(Texts.categories)}</Text>
                            <TouchableOpacity>
                                <Svgs.CategoryIcon></Svgs.CategoryIcon>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.titleContainer}>
                            <Text style={styles.costTitle}>{loc.t(Texts.expenseAmount)}</Text>
                        </View>
                        <View style={styles.inputContainer}>
                            <View style={styles.inputCostContainer}>
                                <Text style={styles.tlIcon}>{loc.t(Texts.currency)}</Text>
                                <TextInput style={styles.inputCost}
                                      placeholderStyle={styles.inputCost}
                                      value={itemCount}
                                      onChangeText={setItemCount}
                                      placeholder= '0'
                                      placeholderTextColor="#BC0336"
                                      keyboardType="number-pad" />
                            </View>
                            <View style={styles.inputInfoContainer}>
                            <TextInput 
                                value={itemName}
                                onChangeText={setItemName}
                                style={styles.input} 
                                placeholder= {loc.t(Texts.itemName)}
                                placeholderTextColor="rgba(0,0,0,0.3)"/>
                            <TextInput 
                                value={itemDate}
                                onChangeText={setItemDate}
                                style={styles.input} 
                                placeholder={loc.t(Texts.date)}
                                placeholderTextColor="rgba(0,0,0,0.3)"/>
                            <TextInput 
                                value={itemDetail}
                                onChangeText={setItemDetail}
                                style={styles.input} 
                                placeholder={loc.t(Texts.description)}
                                placeholderTextColor="rgba(0,0,0,0.3)"/>
                            </View>
                        </View>
                        <View style={styles.addButtonContainer}>
                            <TouchableOpacity onPress={_onPress_AddEdit}>
                                <Svgs.AddButton></Svgs.AddButton>
                            </TouchableOpacity>
                        </View>
                        
                    </View>
                </View>

            </LinearGradient>
       </View>         
    );
};

export default AddEditScreen;
