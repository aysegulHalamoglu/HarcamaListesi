import React from 'react';
import { Alert } from 'react-native';

import AuthScreenUI from './AuthScreenUI';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signInRequest, signUpRequest } from '../Redux/UserRedux';
import { isValidEmail } from '../Utils/AuthValidations';
import { isValidPasswordConfirm } from '../Utils/AuthValidations';


const AuthScreen = props => {

    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [name, setName] = useState('');

    const dispatch = useDispatch();

    const _onPress_SignUp = () => {
        
        if (email.length === 0 || password.length === 0 || passwordConfirm.length === 0||  name.length === 0 ) {
            Alert.alert('Uyarı', 'Lütfen tüm alanları doldurun.');
        }
        else if (!isValidEmail(email) ) {
            Alert.alert('Uyarı', 'Lütfen e-posta adresinizi kontrol edin.');
        }
        else if (password !== passwordConfirm)  {
            Alert.alert('Uyarı', 'Şifreler eşleşmiyor: Lütfen kontrol edin.');
        }
        else {
            dispatch(signUpRequest(email, password, name));
        }

        
    }


    const _onPress_SignIn = () => {
        if (email.length === 0 || password.length === 0 || passwordConfirm.length === 0) {
            Alert.alert('Uyarı', 'Lütfen tüm alanları doldurun.');
        }
        else {
            dispatch(signInRequest(email, password,passwordConfirm))
        }
    }

    return (
        <AuthScreenUI
            emailValue={email}
            passwordValue={password}
            passwordConfirmValue={passwordConfirm}
            nameValue={name}
            onChangeText_Email={setEmail}
            onChangeText_Password={setPassword}
            onChangeText_PasswordConfirm={setPasswordConfirm}
            onChangeText_Name={setName}
            onPress_SignUp={_onPress_SignUp}
            onPress_SignIn={_onPress_SignIn}
        />
    );

}

export default AuthScreen;