import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//screen imports 
import CalendarScreen from '../Screens/Calendar/CalendarScreen';
import SettingsScreen from '../Screens/Settings/SettingsScreen';
import HomeScreen from '../Screens/Home/HomeScreen';
import AddEditScreen from '../Screens/Home/Components/AddEditScreen';

//component imports
import AddExpenseModal from '../Screens/Home/Components/AddExpenseModal';


import { useLocalization, Texts } from '../Localization';
import { colorNames, useThemedColors } from '../Theming';
import { Fonts } from '../Constants';



const AppStack = createStackNavigator();

const AppNavigation = () => {
    const Colors = useThemedColors();
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
                    headerStyle: {
                        backgroundColor: Colors[colorNames.header.background],
                        borderBottomColor: Colors[colorNames.header.headerborder],
                        borderBottomWidth: 1,
                    },
                    headerTintColor: Colors[colorNames.header.text],
                    headerTitleStyle: {
                        fontFamily:Fonts.Families.medium,
                        fontWeight: 'bold',
                      },
                }}
            />
  
                
            <AppStack.Screen
                name = "settings-screen"
                component = {SettingsScreen}
                options = {{
                    title: loc.t(Texts.settings),
                    headerStyle: {
                        backgroundColor: Colors[colorNames.header.background],
                        borderBottomColor: Colors[colorNames.header.headerborder],
                        borderBottomWidth: 1,
                    },
                    headerTintColor: Colors[colorNames.header.text],
                    headerTitleStyle: {
                        fontFamily:Fonts.Families.medium,
                        fontWeight: 'bold',
                      },
                }}
            />

            <AppStack.Screen
                name = "add-edit-screen"
                component = {AddEditScreen}
                options = {{
                    title: loc.t(Texts.settings),
                    headerShown: false,
                }}
            />
        </AppStack.Navigator>
    )
};


export default AppNavigation;