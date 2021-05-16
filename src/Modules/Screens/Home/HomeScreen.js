import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';
import { userSelector } from '../../Auth/Redux/UserRedux';
import { useLocalization, Texts} from '../../Localization';
//import { useDispatchChangeTheme, useTheme, useThemedValues, useThemedOption } from '../../Theming';
//Components
//import AddExpenseModal from './Components/AddExpenseModal';
import { addItem, deleteItem, subscribeToItemData, updateItem } from './API/Firebase';
//Assets-Styling
import { Svgs } from '../../Constants/'
import { Metrics, Fonts } from '../../Constants';
import styles from './Styles/HomeScreenStyles';
import AddEditScreen from './Components/AddEditScreen';
import Modal from 'react-native-modal';



/*
   disabled font scale in particular places 

   export function Text(props) {
    return <ScaledText {...props} allowFontScaling={false} />;
   }
*/



const HomeScreen = props => {

    const [itemList, setItemList] = useState(null);
    const [isDeleteModeOn, setIsDeleteModeOn] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    
    const loc = useLocalization();

    useEffect(() => {
        const off = subscribeToItemData(itemList => {
            setItemList(itemList)
        });

        return () => off();
    }, [])

    const _onPress_ModalBackdrop = () => {
        setIsModalVisible(false);
    }

    const _onPress_OpenModal = () => {
        setIsModalVisible(true);
    }

    // Silme modu kapalıyken ekleme sayfasına götürsün
    // Silme modu açıkken de silme modunu kapatsın.
    const _onPress_Add = () => {
        if (isDeleteModeOn) {
            setIsDeleteModeOn(false);
        }
        else {
            props.navigation.navigate('add-edit-screen');
        }
    }

    // Silme modu açıkken basılınca silinsin
    // Kapalıyken, edit sayfasına gitsin
    const _onPress_Edit = item => {
        if (isDeleteModeOn) {
            deleteItem(item.key)
        }
        else {
            // AddEditScreen'e item'in id'sini gönderiyoruz
            props.navigation.navigate('add-edit-screen', {
                itemKey: item.key
            })
        }
    }

    // Alındı durumu tersine çevrilsin
    const _onLongPress_Item = item => {
        updateItem({
            ...item,
            isBought: !item.isBought,
        });
    }

    // Yeni ekle butonuna uzun basılınca silme modu açılsın
    const _onLongPress_Add = () => {
        setIsDeleteModeOn(true);
    }

    const _renderItem = ({ item }) => {
        // item'e basıldığında id'sini gönderiyoruz
        return (
            <TouchableOpacity
                style={styles.flatList}
                onPress={() => _onPress_Edit(item)}
                onLongPress={() => _onLongPress_Item(item)}>
                <Text style={[styles.itemText, { color: item.isBought ? 'rgba(0,0,0,0.4)' : 'black' }]}>{item.title}</Text>
            </TouchableOpacity>
        )
    }

    const _ItemSeparator = () => {
        return <View style={styles.separator} />
    }

    const _onPress_Settings = () => {
        props.navigation.navigate('settings-screen')
    };

    const _onPress_Calendar = () => {
        props.navigation.navigate('calendar-screen')
    };

    const user = useSelector(userSelector);

    return (
        <>
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="#F1F2B5"
                    barStyle="dark-content" />
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} colors={["#F1F2B5", "#C779D0", "#4BC0C8"]}
                            style={styles.container}>

                    <View style={styles.stackContainer}>
                        <View style={styles.profileContainer}>
                            <Text style={styles.welcomeText}>{loc.t(Texts.welcome)}</Text>
                            <Text style={styles.profileName}>{user.displayName}</Text>
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
                                    <Text style={{ fontSize: Fonts.Sizes.twentytwo, color: 'white', fontFamily: Fonts.Families.semibold }}>{loc.t(Texts.totalBudget)} </Text>
                                    <Text style={{  fontSize: Fonts.Sizes.thirty, color: 'white', fontFamily: Fonts.Families.semibold }}>₺ 860.00</Text>
                                </View>
                                <View style={styles.bottomCardContainer}>
                                    <View style={styles.incomeExpenseContainer}>
                                        <Text style={{ fontSize: Fonts.Sizes.eighteen, color: 'white', fontFamily: Fonts.Families.semibold }}>{loc.t(Texts.income)} </Text>
                                        <Text style={{  fontSize: Fonts.Sizes.twentytwo, color: 'white', fontFamily: Fonts.Families.semibold }}>₺ 1580.00</Text>
                                    </View>
                                    <View style={styles.incomeExpenseContainer}>
                                        <Text style={{ fontSize: Fonts.Sizes.eighteen, color: 'white', fontFamily: Fonts.Families.semibold }}>{loc.t(Texts.expense)} </Text>
                                        <Text style={{  fontSize: Fonts.Sizes.twentytwo, color: 'white', fontFamily: Fonts.Families.semibold }}>₺ 720.00</Text>
                                    </View>
                                </View>

                            </LinearGradient>

                        </TouchableOpacity>
                    </View>
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>{loc.t(Texts.headerExpenses)} </Text>
                        <TouchableOpacity>
                            <Text style={styles.textButton}>{loc.t(Texts.textButton)}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.flatListContainer}>
                        <FlatList                             
                            data={itemList}
                            renderItem={_renderItem}
                            keyExtractor={item => item.key}
                            ListFooterComponent={() => <Text> </Text>}
                        />
                    </View>
                    <View style={styles.tabNavigationContainer}>
                        <Svgs.MenuIcon width="40%" height="40%"></Svgs.MenuIcon>
                        <TouchableOpacity
                            onPress={_onPress_Add}
                            onLongPress={_onLongPress_Add}
                            >
                            <View style={styles.addButtonContainer}>
                                <Svgs.AddIcon width="100%" height="100%"></Svgs.AddIcon>
                            </View>
                        </TouchableOpacity>
                        <Svgs.ChartTabIcon width="40%" height="40%"></Svgs.ChartTabIcon>
                        </View>
                        <Modal
                            isVisible={isModalVisible}
                            // arkaplana tıklayınca fonksiyonu
                            onBackdropPress={_onPress_ModalBackdrop}
                            style={styles.modal}
                            // açılış animasyonu
                            animationType="slide"
                            // kapanış animasyonu
                            animationOut="fadeOut"
                        >
                            <AddEditScreen />
                        </Modal>
                    
                </LinearGradient>
            </View>
        </>
    )
}



export default HomeScreen;


