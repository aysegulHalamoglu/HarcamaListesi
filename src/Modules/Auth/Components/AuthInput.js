import React from 'react';

import { TextInput, View } from 'react-native';

import BorderedBox from '../../Components/BorderedBox';
import { useThemedValues, colorNames } from '../../Theming';

import getStyles from '../Styles/AuthInputStyles';

const AuthInput = props => {

    const {styles, colors} = useThemedValues(getStyles);

    return (
        <BorderedBox borderColor={colors[colorNames.auth.inputBorder]}>
            <View style={styles.inputContainer}>
                <TextInput
                    autoCapitalize={props.autoCapitalize}
                    secureTextEntry={props.secureTextEntry}
                    style={styles.input}
                    value={props.value}
                    onChangeText={props.onChangeText}
                    autoCorrect={false}
                    placeholder={props.placeholder}
                    placeholderTextColor={colors[colorNames.auth.inputPlaceholder]} />
            </View>
        </BorderedBox>
    );
};

export default AuthInput;