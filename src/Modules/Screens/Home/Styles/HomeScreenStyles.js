import { StyleSheet } from 'react-native';
import { Metrics, Fonts } from '../../../Constants';
import { colorNames } from '../../../Theming';

export default StyleSheet.create ({
    container: {
        flex:1,
        backgroundColor: 'white',
        padding: Metrics.marginHorizontal,
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
        width: Metrics.width * 0.2,
        height: Metrics.width * 0.2,
    }
});