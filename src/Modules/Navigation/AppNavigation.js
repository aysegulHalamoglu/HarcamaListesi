import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from '../Screens/Settings/SettingsScreen';
//import HomeScreen from '../Screens/Home/HomeScreen';
import { useLocalization, Texts } from '../Localization';
import { useThemedColors } from '../Theming';

const AppStack = createStackNavigator();

const AppNavigation = () => {
    const colors = useThemedColors();
    const loc = useLocalization();

    return (
        <AppStack.Navigator>
            <AppStack.Screen
                name = "settings-screen"
                component = {SettingsScreen}
                options = {{
                    title: loc.t(Texts.settings),
                }}
            />
        </AppStack.Navigator>
    )
};


export default AppNavigation;