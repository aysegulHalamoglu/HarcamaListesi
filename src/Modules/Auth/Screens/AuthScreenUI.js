import React, { useState } from 'react';

import {
    Image,
    KeyboardAvoidingView,
    SafeAreaView,
    Text,
    View,
    TouchableOpacity,
    Keyboard,
    Platform,
    StyleSheet,
} from 'react-native';

import { Images } from '../../Constants';

import AuthInput from '../Components/AuthInput';
import AuthButton from '../Components/AuthButton';

import getStyles from '../Styles/AuthScreenStyles';
import { useThemedStyles } from '../../Theming';
import { Texts, useLocalization, useLocale } from '../../Localization';
import { colorNames } from '../../Theming/Colors';

const AuthScreenUI = props => {

    const [isLogin, setIsLogin] = useState(true);
    const styles = useThemedStyles(getStyles);
    const loc = useLocalization();

    const locale = useLocale();
    const loginUppercase = loc.t(Texts.login).toLocaleUpperCase(locale);
    const signupUppercase = loc.t(Texts.signUp).toLocaleUpperCase(locale);

    return (
        <SafeAreaView style={styles.safeArea}>
            <KeyboardAvoidingView
                style={styles.keyboardAvoiding}
                behavior={Platform.OS === 'ios' ? 'padding' : null}
                keyboardVerticalOffset={0}>
                <TouchableOpacity
                    style={styles.container}
                    activeOpacity={1}
                    onPress={Keyboard.dismiss}

                >
                    <View style={StyleSheet.absoluteFillObject}>
                        <Image source={Images.backgroundImage} blurRadius={20} />
                    </View>

                    <View style={styles.appLogoContainer}>
                        <Image source={colorNames.auth.appLogoLarge} style={styles.image} />
                    </View>
                    <View style={styles.inputsContainer}>
                        {
                            isLogin ?
                                null
                                :
                                <View style={styles.inputContainer}>
                                    <AuthInput
                                        value={props.nameValue}
                                        onChangeText={props.onChangeText_Name}
                                        autoCapitalize={'words'}
                                        placeholder={loc.t(Texts.username)} />
                                </View>
                        }
                        <View style={styles.inputContainer}>
                            <AuthInput
                                value={props.emailValue}
                                onChangeText={props.onChangeText_Email}
                                autoCapitalize={'none'}
                                placeholder={loc.t(Texts.email)} />
                        </View>
                        <View style={styles.inputContainer}>
                            <AuthInput
                                value={props.passwordValue}
                                onChangeText={props.onChangeText_Password}
                                autoCapitalize={'none'}
                                placeholder={loc.t(Texts.password)}
                                secureTextEntry={true} />
                        </View>
                        <View style={styles.inputContainer}>
                            <AuthInput
                                value={props.passwordConfirmValue}
                                onChangeText={props.onChangeText_PasswordConfirm}
                                autoCapitalize={'none'}
                                placeholder={loc.t(Texts.passwordConfirm)}
                                secureTextEntry={true} />
                        </View>
                    </View>
                    <View style={styles.buttonsContainer}>
                        <AuthButton
                            onPress={isLogin ? props.onPress_SignIn : props.onPress_SignUp}
                            disabled={false}
                            text={isLogin ? loginUppercase : signupUppercase} />
                        <TouchableOpacity style={styles.signupTouchable} onPress={() => setIsLogin(!isLogin)}>
                            <Text style={styles.signupText}>
                                {isLogin ? loc.t(Texts.signUp) : loc.t(Texts.login)}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.footerContainer}>
                        <Text style={styles.footer}></Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );

};

export default AuthScreenUI;