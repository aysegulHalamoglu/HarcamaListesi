import { StyleSheet } from 'react-native';
import { Metrics, Fonts } from '../../../Constants';
import { colorNames } from '../../../Theming';


const styles = (Colors) => StyleSheet.create({
    container: {
        flex: 1,
        padding: Metrics.marginHorizontal,
    },
    nameText: {
        fontSize: Fonts.Sizes.eighteen,
        fontFamily: Fonts.Families.bold,
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
        borderColor: Colors[colorNames.settings.signOutButtonBox],
        backgroundColor: Colors[colorNames.settings.signOutButtonBackground],
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    signOutText: {
        fontSize: Fonts.Sizes.eighteen,
        color: Colors[colorNames.settings.signOutButtonText],
    }
});

export default styles;