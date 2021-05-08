import { StyleSheet } from 'react-native';
import { Fonts, Metrics } from '../../../Constants';

export default StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'white'
    },
    container: {
        flex: 1,
        padding: Metrics.marginHorizontal,
    },
    scroll: {
        flexGrow: 1,
        flexShrink: 1,
    },
    inputContainer: {
        borderRadius: Metrics.borderRadiusStandard,
        backgroundColor: 'rgba(0,0,0,0.07)',
        paddingVertical: Metrics.width * 0.03,
        paddingHorizontal: Metrics.width * 0.04,
        marginBottom: Metrics.width * 0.03,
    },
    input: {
        padding: 0,
        fontFamily: Fonts.Families.medium,
        fontSize: 14,
        color: 'black'
    },
    touchable: {
        backgroundColor: 'orange',
        borderRadius: Metrics.borderRadiusStandard,
        height: Metrics.width * 0.12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontFamily: Fonts.Families.semibold,
        fontSize: 20,
        color: 'white',
    },
});
