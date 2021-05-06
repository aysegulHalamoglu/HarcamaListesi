import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CalendarScreen from '../Screens/Calendar/CalendarScreen';
import { useLocalization, Texts } from '../Localization';
import { useThemedColors } from '../Theming';

const CalendarStack = createStackNavigator();

const CalendarNavigation = () => {
    const colors = useThemedColors();
    const loc = useLocalization();

    return (
        <CalendarStack.Navigator>
            <CalendarStack.Screen
                name = "calendar-screen"
                component = {CalendarScreen}
                options = {{
                    title: loc.t(Texts.calendar),
                }}
            />
        </CalendarStack.Navigator>
    )
};


export default CalendarNavigation;