import React from 'react';
import { View, Text, FlatList} from 'react-native';

import CategoryItem from './Components/CategoryItem';
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

        const _renderCategoryItem = ({item}) => {
            return (
                <CategoryItem data={item}/>
            )
        }
    
        const EmptyComponent = props => {
            return <Text>Boş</Text>
        }

        return (
            <>
                <View style={styles.container}>
                    <View style={styles.titleContainer}>
                        {/* Title */}
                        <Text>Kategoriler</Text>
                    </View>
                    <View style={styles.flatListContainer}>
                        {/* CategoryList */}
                        <FlatList
                            ListEmptyComponent={EmptyComponent}
                            // Render edilecek itemlerin listesi (array)
                            data={dummyCategories}
                            // Her bir itemin nasıl render edileceği (fonksiyon)
                            renderItem={_renderCategoryItem}
                            // Her bir itemin 'key'sinin ne olacağı (fonksiyon)
                            keyExtractor={(item, index) => index}
                            numColumns={2}
                            style={styles.flatList}
                            // Her bir sütunun container style'ı
                            columnWrapperStyle={styles.columnWrapperStyle}
                            // FlatList'in içindeki her şeyi kapsayan container style'ı
                            contentContainerStyle={styles.contentContainerStyle}
                        />
                    </View>        
                </View>
                <Modal
                    isVisible={isModalVisible}
                    // arkaplana tıklayınca fonksiyonu
                    onBackdropPress={_onPress_ModalBackdrop}
                    style={styles.modal}
                    // açılış animasyonu
                    animationIn="fadeIn"
                    // kapanış animasyonu
                    animationOut="fadeOut"
                >

                    <AddExpenseModal>

                    </AddExpenseModal>
                </Modal>
            </>
                
            
        )
    }
    
    

    export default HomeScreen;