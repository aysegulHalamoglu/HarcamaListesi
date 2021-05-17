import { StyleSheet } from 'react-native';

import { Metrics} from '../../Constants';

const styles = StyleSheet.create({
    container: {
        borderRadius: Metrics.borderRadiusStandard,
        borderWidth: 2,
    },
    normalHeight: {
        height: Metrics.boxNormalHeight,
    },
    tallHeight: {
        height: Metrics.normalHeight,
    },
});

export default styles;