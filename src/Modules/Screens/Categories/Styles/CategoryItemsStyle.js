import { StyleSheet } from 'react-native';
import { Fonts, Metrics } from '../../../Constants';
import { colorNames } from '../../../Theming';


const styles = StyleSheet.create({
    container: {
        height: Metrics.width * 0.2,
        width: Metrics.width * 0.4,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: Metrics.borderRadius,
        marginBottom: Metrics.width * 0.05,
        marginRight: Metrics.width * 0.05,
    },
    text: {
        fontSize: Fonts.Sizes.sixteen,
        fontFamily: Fonts.Families.regular,
        color: 'black',
        
    },
});

export default styles;