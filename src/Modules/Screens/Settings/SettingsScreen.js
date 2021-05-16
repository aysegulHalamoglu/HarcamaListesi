import React from 'react';
import { SafeAreaView,  Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

import { useDispatchChangeTheme, colorNames, useTheme, useThemedOption, useThemedStyles, useThemedColors  } from '../../Theming';
import { useLocalization, Texts, useLocaleOptions, useLocale, useDispatchChangeLocale } from '../../Localization';
import OptionMenu from './Components/OptionMenu';
import { userSelector, signOutRequest } from '../../Auth/Redux/UserRedux';

import getStyles from '../Settings/Styles/SettingsScreenStyles';

const SettingsScreen = props => {

    const currentTheme = useTheme();
    const changeTheme = useDispatchChangeTheme();
    const themeOptions = useThemedOption();
    console.log(themeOptions)

    const currentLocale = useLocale();
    const loc = useLocalization();
    const localeOptions = useLocaleOptions();
    const changeLocale = useDispatchChangeLocale();

    const styles = useThemedStyles(getStyles);
    const Colors = useThemedColors(getStyles);

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
    const user = useSelector(userSelector);
    return (
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} colors={Colors[colorNames.settings.background]}
        style={{flex:1}}>
        <View style={styles.container}>
            <SafeAreaView style={{flex: 1}}>


                <Text style={styles.nameText}>
                    {user.displayName}
                </Text>
                <Text style={styles.emailText}>
                    {user.email}
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
        </LinearGradient>
    )
};

export default SettingsScreen;