import React from 'react';
import { StyleSheet } from 'react-native';
import { Metrics, Fonts} from '../../../Constants';
import { colorNames } from '../../../Theming';

export default StyleSheet.create({
    container: {
        width: Metrics.width * 0.8,
        height: Metrics.width,
        borderRadius: Metrics.borderRadiusSmall,
        backgroundColor: 'white',
        flex:0.75,
    },
    titleBox: {
        width: Metrics.width * 0.6,
        height: Metrics.height * 0.5,
        borderRadius: Metrics.borderRadiusSmall,
    },
    inputBox: {
        
    },
    input: {
        
    },
    addButton: {
        backgroundColor: 'orange',
        borderRadius: Metrics.borderRadiusStandard,
        height: Metrics.width * 0.12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addButtonText: {
        fontFamily: Fonts.Families.semibold,
        fontSize: Fonts.Sizes.twenty,
        color: 'white',
    },
});