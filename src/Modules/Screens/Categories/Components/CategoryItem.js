import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import styles from '../Styles/CategoryItemsStyle';

const CategoryItem = props => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text
                numberOfLines={1}
                style={styles.text}>
                    {props.data.categoryName}</Text>
        </TouchableOpacity>
        
    );
}

export default CategoryItem;