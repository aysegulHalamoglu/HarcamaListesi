import {Dimensions} from 'react-native';
import { Metrics } from '.';

let windowSize = Dimensions.get('window');
export const width = windowSize.width;
export const height = windowSize.height;

export default {
    width,
    height,
    
    marginHorizontal: width * 0.05,
    marginHorizontalLarge: width * 0.1,
    textMargin: width * 0.03,
    marginVertical: width * 0.05,
    horizontalLineHeight: 1,
    navBarHeight: (Platform.OS === 'android') ? 64 : 54,
    tabHeight: width * 0.15,
    borderRadiusFullRound: 1000,
    borderRadiusStandard: 10,
    borderRadius: 8,
    borderRadiusSmall: 5,
    textMargin: width * 0.03,
    boxNormalHeight: width * 0.12,
    boxTallHeight: width * 0.2,
    paddingTop: width * 0.05,
    paddingBottom: width * 0.03,
    paddingVertical: width * 0.05,
};
