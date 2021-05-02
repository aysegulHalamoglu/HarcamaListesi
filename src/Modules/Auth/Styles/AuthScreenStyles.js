import { StyleSheet } from 'react-native';
import {Metrics, Fonts} from '../../Constants';
import { colorNames } from '../../Theming';

const styles = (Colors) => StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: Colors[colorNames.auth.background],
    },
    keyboardAvoiding: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'space-between',
        paddingBottom: Metrics.width * 0.03,
        paddingHorizontal: Metrics.marginHorizontal,

    },
    loadingOverlay: {
        backgroundColor: 'rgba(0,0,0,0.4)',
        position: 'absolute',
        width: Metrics.width,
        height: Metrics.height,
        zIndex: 1,
        justifyContent: 'center',
    },
    appLogoContainer: {
        flex: 0.75,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputsContainer: {
        minHeight: Metrics.width * 0.5,
        justifyContent: 'center',
    },
    buttonsContainer: {
        justifyContent: 'center',
    },
    appNameContainer: {
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    image: {
        width: undefined,
        height: '90%',
        aspectRatio: 1,
        resizeMode: 'contain',
    },
    inputContainer: {
        marginBottom: Metrics.width * 0.02,
    },
    signupTouchable: {
        alignItems: 'center',
        marginTop: Metrics.width * 0.02,
        backgroundColor: Colors[colorNames.auth.paleButtonBackground],
    },
    signupText: {
        fontFamily: Fonts.Families.bold,
        fontSize: Fonts.Sizes.eighteen,
        color: Colors[colorNames.auth.paleButtonText],
    },
    appNameText: {
        fontFamily: Fonts.Families.logo,
        fontSize: Fonts.Sizes.twenty,
        color: Colors[colorNames.auth.appNameText],
        letterSpacing: Metrics.width * 0.02,
    },
});

export default styles;
