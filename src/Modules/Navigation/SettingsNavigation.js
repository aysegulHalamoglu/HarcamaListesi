import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from '../Screens/Settings/SettingsScreen';

const SettingsStack = createStackNavigator();

const SettingsNavigation = () => {
    return (
        <SettingsStack.Navigator>
            <SettingsStack.Screen
                name="setting-screen"
                component={SettingsScreen} 
                options={{
                    title: 'Kategoriler'
                }} />
        </SettingsStack.Navigator>
    );
};

export default SettingsNavigation;
