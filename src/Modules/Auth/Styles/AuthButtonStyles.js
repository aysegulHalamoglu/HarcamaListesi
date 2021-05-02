import { StyleSheet } from 'react-native';
import { Fonts} from '../../Constants';
import { colorNames } from '../../Theming';

const styles = (Colors) => StyleSheet.create({
    touchable: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontFamily: Fonts.Families.bold,
        fontSize: Fonts.Sizes.eighteen,
        color: Colors[colorNames.auth.coloredButtonText],
    },
});

export default styles;
