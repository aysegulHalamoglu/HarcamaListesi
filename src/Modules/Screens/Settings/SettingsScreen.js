import React from 'react';
import { SafeAreaView,  Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { useDispatchChangeTheme, useTheme, useThemedValues, useThemedOption } from '../../Theming';
import { useLocalization, Texts, useLocaleOptions, useLocale, useDispatchChangeLocale } from '../../Localization';
import OptionMenu from './Components/OptionMenu';

import getStyles from '../Settings/Styles/SettingsScreenStyles';


const SettingsScreen = props => {

    const currentTheme = useTheme();
    const {styles, colors} = useThemedValues(getStyles);
    const changeTheme = useDispatchChangeTheme();
    const themeOptions = useThemedOption();
    console.log(themeOptions)

    const currentLocale = useLocale();
    const loc = useLocalization();
    const localeOptions = useLocaleOptions();
    const changeLocale = useDispatchChangeLocale();

    const _onSelect_Theme = (key) => {
        changeTheme(key);
    }

    const _onSelect_Locale = (key) => {
        changeLocale(key);
    }

    const dispatch = useDispatch();
    const _onPress_SignOut = () => {
        dispatch(signOutRequest());
    }

    return (
        <View style={styles.container}>
            <SafeAreaView style={{flex: 1}}>
                <Text style={styles.nameText}>
                    X
                </Text>
                <Text style={styles.emailText}>
                    x@mail.com
                </Text>
                <View style={styles.menusContainer}>
                    <OptionMenu
                        options={themeOptions}
                        menuTitle={loc.t(Texts.colorTheme)}
                        selectedOptionKey={currentTheme}
                        onSelect={_onSelect_Theme}
                    />
                    <OptionMenu
                        options={localeOptions}
                        menuTitle={loc.t(Texts.language)}
                        selectedOptionKey={currentLocale}
                        onSelect={_onSelect_Locale}
                    />
                </View>
                <TouchableOpacity style={styles.signOutBox} onPress={_onPress_SignOut}>
                    <Text style={styles.signOutText}>{loc.t(Texts.signOut)}</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </View>
    )
};

export default SettingsScreen;