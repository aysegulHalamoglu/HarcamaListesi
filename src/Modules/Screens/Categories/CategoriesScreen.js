import React from 'react';
import { View, Text, FlatList} from 'react-native';

import CategoryItem from './Components/CategoryItem';
import styles from './Styles/CategoriesScreenStyles';
import CategoryItemsStyle from './Styles/CategoryItemsStyle';


const dummyCategories = [
    {
        categoryId: 1,
        categoryName: 'MARKET',
        color: 'orange',
    },
    {
        categoryId: 2,
        categoryName: 'GİYİM',
        color: 'red',
    },
    {
        categoryId: 3,
        categoryName: 'FATURALAR',

    },
    {
        categoryId: 4,
        categoryName: 'YEME - İÇME',
    },
    {
        categoryId: 5,
        categoryName: 'EĞLENCE',
    },
    {
        categoryId: 6,
        categoryName: 'TEKNOLOJİ',
    },
    {
        categoryId: 7,
        categoryName: 'KOZMETİK',
    },
    {
        categoryId: 8,
        categoryName: 'HEDİYE',
    },
]


    const CategoriesScreen = props => {

        const _renderCategoryItem = ({item}) => {
            return (
                <CategoryItem data={item}/>
            )
        }

        const _renderCategoryItemColor = ({item}) => {
            return (
                <CategoryItemsStyle data={item}/>
            )
        }
    
        const EmptyComponent = props => {
            return <Text>Boş</Text>
        }

        return (
            
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
                
            
        )
    }
    

    export default CategoriesScreen;