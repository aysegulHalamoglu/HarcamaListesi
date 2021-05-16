import { StyleSheet } from 'react-native';
import {Metrics, Fonts} from '../../Constants';
import { colorNames } from '../../Theming';

const styles = (Colors) => StyleSheet.create({
    inputContainer: {
        flex:1,
        paddingHorizontal: Metrics.textMargin,
        backgroundColor: Colors[colorNames.auth.inputBackground],
        borderRadius:Metrics.borderRadiusStandard,
    },
    input: {
        flex:1,
        fontSize: Fonts.Sizes.eighteen,
        fontFamily: Fonts.Families.regular,
        color: Colors[colorNames.auth.inputText],
    },
});

export default styles;
