import { StyleSheet } from 'react-native';
import { Metrics, Fonts } from '../../../Constants';
import { colorNames } from '../../../Theming';

export default  StyleSheet.create ({
    stackContainer: {
        flex:1,
        flexDirection: 'row',
        backgroundColor: '#F2F2F2',
        padding: Metrics.marginHorizontal,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    profileContainer: {
        width: Metrics.width * 0.40,
        height: Metrics.width * 0.20,
        borderRadius: Metrics.borderRadiusStandard,
        backgroundColor:'red',
    },
    welcomeText: {
        fontFamily: Fonts.Families.light,
        fontSize: 8,
        color: '#202020',
    },
    profileName: {
        fontFamily: Fonts.Families.semibold,
        fontSize: Fonts.Sizes.twenty,
        color: 'red',
    },
    settingsContainer: {
        flexDirection: 'row',
        width: Metrics.width * 0.1,
        height: Metrics.width * 0.1,
        borderRadius: Metrics.borderRadiusSmall,
        backgroundColor: '#202020',

    },
    titleContainer: {
        paddingVertical: Metrics.paddingVertical,
    },
    flatListContainer: {
        flexGrow: 1,
        paddingTop: Metrics.paddingTop,
    },
    flatList: {
        flex: 1,
    },
    contentContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    columnWrapperStyle: {
        // backgroundColor: 'yellow',
        justifyContent: 'space-between',
        paddingBottom: Metrics.width * 0.03,
    },
    buttonContainer: {
        justifyContent: 'space-around', 
        alignItems: 'flex-end',
           
    },
    touchable: {
        backgroundColor: 'lime',
        borderRadius: Metrics.width * 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        width: Metrics.width * 0.1,
        height: Metrics.width * 0.1,
    },
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        
        
    }
});