import { StyleSheet } from 'react-native';
import { Metrics, Fonts } from '../../../Constants';
import { colorNames } from '../../../Theming';

export default Colors => StyleSheet.create({
    container: {
        marginVertical: Metrics.width * 0.03,
    },
    titleText: {
        fontFamily: Fonts.Families.bold,
        fontSize: Fonts.Sizes.eighteen,
        color: Colors[colorNames.settings.titleText],
        marginBottom: Metrics.width * 0.01,
    },
    optionTouchable: {
        flexDirection: 'row',
        marginTop: Metrics.width * 0.02,
        alignItems: 'center',
    },
    iconContainer: {
        width: Metrics.width * 0.04,
        height: undefined,
        aspectRatio: 1,
        marginRight: Metrics.width * 0.03,
    },
    optionTitleText: {
        fontFamily: Fonts.Families.regular,
        fontSize: Fonts.Sizes.sixteen,
        color: Colors[colorNames.settings.radioButtonText],
    },
});