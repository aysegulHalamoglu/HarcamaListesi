import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//screen imports 
import CalendarScreen from '../Screens/Calendar/CalendarScreen';
import SettingsScreen from '../Screens/Settings/SettingsScreen';
import HomeScreen from '../Screens/Home/HomeScreen';

//component imports
import AddExpenseModal from '../Screens/Home/Components/AddExpenseModal';


import { useLocalization, Texts } from '../Localization';
import { useThemedColors } from '../Theming';



const AppStack = createStackNavigator();

const AppNavigation = () => {
    const colors = useThemedColors();
    const loc = useLocalization();

    return (
        <AppStack.Navigator>
            
            <AppStack.Screen
                name = "home-screen"
                component = {HomeScreen}
                options = {{
                    title: loc.t(Texts.settings),
                    headerShown: false,
                }}
            />
            
            <AppStack.Screen
                name = "calendar-screen"
                component = {CalendarScreen}
                options = {{
                    title: loc.t(Texts.calendarHeader),
                }}
            />
  
                
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