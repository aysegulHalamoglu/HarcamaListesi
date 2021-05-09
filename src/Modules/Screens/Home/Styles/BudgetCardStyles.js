import { StyleSheet } from 'react-native';
import { Metrics, Fonts } from '../../../Constants';
import { colorNames } from '../../../Theming';

export default StyleSheet.create ({

budgetCard: {
    width: Metrics.width * 0.8,
    height: Metrics.width * 0.5,
    borderRadius: Metrics.borderRadiusStandard,
    alignItems: 'center',
    justifyContent: 'center',
    
},
topCardContainer: {
    width: Metrics.width * 0.8,
    height: Metrics.width * 0.2,
    alignItems: 'center',
},
bottomCardContainer: {
    width: Metrics.width * 0.8,
    height: Metrics.width * 0.2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    
},
incomeExpenseContainer: {
    width: Metrics.width * 0.3,
    height: Metrics.width * 0.15,
},

});
