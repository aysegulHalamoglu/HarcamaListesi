import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import CategoriesScreen from '../Screens/Categories/CategoriesScreen';

const DummyScreen = props => {
    return (
        <View>
            <Text>Deneme</Text>
        </View>
    );
}

const DummyStack = createStackNavigator();

const DummyNavigation = () => {
    return (
        <DummyStack.Navigator>
            <DummyStack.Screen
                name="categories-screen"
                component={CategoriesScreen} 
                options={{
                    title: 'Kategoriler'
                }} />
        </DummyStack.Navigator>
    );
};

export default DummyNavigation;
