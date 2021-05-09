import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';
import { userSelector } from '../../Auth/Redux/UserRedux';
//import { useDispatchChangeTheme, useTheme, useThemedValues, useThemedOption } from '../../Theming';
//Components
//import AddExpenseModal from './Components/AddExpenseModal';
import { addItem, deleteItem, subscribeToItemData, updateItem } from './API/Firebase';
//Assets-Styling
import { Svgs } from '../../Constants/'
import { Metrics, Fonts } from '../../Constants';
import styles from './Styles/HomeScreenStyles';






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

    const [itemList, setItemList] = useState(null);
    const [isDeleteModeOn, setIsDeleteModeOn] = useState(false);

    useEffect(() => {
        const off = subscribeToItemData(itemList => {
            setItemList(itemList)
        });

        return () => off();
    }, [])

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
                style={styles.itemTouchable}
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
        <View style={styles.container}>
            <StatusBar
                backgroundColor="#F1F2B5"
                barStyle="dark-content"

            />
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                colors={["#F1F2B5", "#C779D0", "#4BC0C8"]}
                style={{ flex: 1 }}>

                <View style={styles.stackContainer}>
                    <View style={styles.profileContainer}>
                        <View style={styles.avatarContainer}>
                            <Text style={styles.avatarName}>{user.displayName['0']}</Text>
                        </View>
                        <View style={styles.profileTextContainer}>
                            <View style={styles.welcomeContainer}>
                                <Text style={styles.welcome}>Welcome</Text>
                            </View>

                            <View style={styles.profileNameContainer}>
                                <Text style={styles.profileName} >{user.displayName}</Text>
                            </View>
                        </View>
                    </View>
                   <View style={styles.settingsContainer} >
                   <TouchableOpacity  onPress={_onPress_Settings}>
                        <Svgs.SettingsIcon width="100%" height="100%"></Svgs.SettingsIcon>
                    </TouchableOpacity>
                   </View>
                </View>
                <View style={styles.accountContainer}>
                    <TouchableOpacity onPress={_onPress_Calendar} style={{ flex: 1 }}>
                        <LinearGradient
                            start={{ x: 1, y: 0 }}
                            end={{ x: 0, y: 1 }}
                            colors={['#EC0076', '#AB48E4', '#6754B7', '#5D9ACF', '#00DCFF']}
                            style={styles.budgetCard}>
                            <View style={styles.totalBudgetContainer}>
                                <View style={styles.budgetTitle}>
                                    <Text style={{ flex: 1, fontSize: Fonts.Sizes.eighteen, color: 'white', fontFamily: Fonts.Families.semibold }}>Net Bütçe</Text>
                                </View>

                                <View style={styles.budgetValue}>
                                    <Text style={{ flex: 1, fontSize: 30, color: 'white', fontFamily: Fonts.Families.semibold }}>₺ 860.00</Text>

                                </View>
                            </View>
                            <View style={styles.bottomCardContainer}>
                                <View style={styles.incomeExpenseContainer}>
                                    <Text style={styles.incomeText }>Gelir</Text>
                                    <Text style={{ flex: 1, fontSize: Fonts.Sizes.twenty, color: 'white', fontFamily: Fonts.Families.semibold }}>₺ 1580.00</Text>
                                </View>
                                <View style={styles.outcomeExpenseContainer}>
                                    <Text style={styles.outcomeText}>Gider</Text>
                                    <Text style={{ flex: 1, fontSize: Fonts.Sizes.twenty, color: 'white', fontFamily: Fonts.Families.semibold }}>₺ 720.00</Text>
                                </View>
                            </View>

                        </LinearGradient>

                    </TouchableOpacity>
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>HARCAMALARIM</Text>

                </View>
                <View style={styles.flatListContainer}>
                    <FlatList
                        style={styles.flatList}
                        data={itemList}
                        renderItem={_renderItem}
                        keyExtractor={item => item.key}
                        ItemSeparatorComponent={_ItemSeparator}
                    />
                </View>
                <View style={styles.tabNavigationContainer}>
                    <Svgs.MenuIcon width="40%" height="40%"></Svgs.MenuIcon>
                    <TouchableOpacity
                        onPress={_onPress_Add}
                        onLongPress={_onLongPress_Add}>
                        <View style={styles.addButtonContainer}>
                            <View style={styles.addButton}>
                                <Svgs.AddIcon width="100%" height="100%"></Svgs.AddIcon>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <Svgs.ChartTabIcon width="40%" height="40%"></Svgs.ChartTabIcon>
                </View>

            </LinearGradient>
        </View>

    )
}



export default HomeScreen;