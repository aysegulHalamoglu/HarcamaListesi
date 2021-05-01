import { StyleSheet } from 'react-native';
import { Metrics, Fonts } from '../../../Constants';
import { colorNames } from '../../../Theming';


export default Colors => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors[colorNames.settings.background],
        padding: Metrics.marginHorizontal,
    },
    nameText: {
        fontSize: Fonts.Sizes.eighteen,
        marginBottom: Metrics.width * 0.01,
        color: Colors[colorNames.settings.usernameText],
    },
    emailText: {
        fontFamily: Fonts.Families.regular,
        fontSize: Fonts.Sizes.sixteen,
        color: Colors[colorNames.settings.userEmailText],
        marginBottom: Metrics.width * 0.05,
    },
    menusContainer: {
        flexGrow: 1,
    },
    signOutBox: {
        height: Metrics.boxNormalHeight,
        borderRadius: Metrics.borderRadiusStandard,
        borderWidth: 2,
        borderColor: Colors[colorNames.settings.signOutButtonBorder],
        backgroundColor: Colors[colorNames.settings.signOutButtonBackground],
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    signOutText: {
        fontSize: Fonts.Sizes.eighteen,
        color: 'red',
    }
});