import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './AppNavigation';

const MainNavigation = (props) => {
    return (
        <NavigationContainer>
            <AppNavigation />
        </NavigationContainer>
    );
};

export default MainNavigation;
