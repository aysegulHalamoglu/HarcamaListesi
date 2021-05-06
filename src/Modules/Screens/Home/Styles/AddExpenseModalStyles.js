import React from 'react';
import { StyleSheet } from 'react-native';
import { Metrics, Fonts } from '../../../Constants';
import { colorNames } from '../../../Theming';

export default Colors => StyleSheet.create({
    container: {
        width: Metrics.width * 0.8,
        height: Metrics.height * 0.6,
        borderRaidus: Metrics.borderRadiusSmall,
        backgroundColor: 'white',
        padding: Metrics.width * 0.06,
    },
    titleBox: {
        width: Metrics.width * 0.6,
        height: Metrics.height * 0.05,
        borderRadius: Metrics.borderRadiusSmall,
    },
    inputBox: {
        borderRadius: Metrics.borderRadiusStandard,
        backgroundColor: 'rgba(0,0,0,0.07)',
        paddingVertical: Metrics.width * 0.03,
        paddingHorizontal: Metrics.width * 0.04,
        marginBottom: Metrics.width * 0.03,
    },
    input: {
        padding: 0,
        fontFamily: Fonts.Families.medium,
        fontSize: Fonts.Sizes.fourteen,
        color: 'black'
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