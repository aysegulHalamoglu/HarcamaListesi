import {Dimensions} from 'react-native';
import { Metrics } from '.';

let windowSize = Dimensions.get('window');
export const width = windowSize.width;
export const height = windowSize.height;

export default {
    width,
    height,
    
    paddingBottom: width * 0.03,
    paddingTop: width * 0.05,
    paddingVertical: width * 0.05,
    
    marginVertical: width * 0.05,
    marginHorizontal: width * 0.05,
    marginHorizontalLarge: width * 0.1,
    textMargin: width * 0.03,
    
    //radius
    borderRadiusFullRound: 1000,
    borderRadiusStandard: 30,
    borderRadius: 8,
    borderRadiusSmall: 5,
    
    boxNormalHeight: width * 0.12,
    boxTallHeight: width * 0.2,
    tabHeight: width * 0.15,
    horizontalLineHeight: 1,
    
    navBarHeight: (Platform.OS === 'android') ? 64 : 54,
};
