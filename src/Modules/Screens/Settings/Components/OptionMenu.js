import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { Svgs } from '../../../Constants';
import { useThemedValues, colorNames } from '../../../Theming';
import Icon from '../Components/Icon';


import getStyles from '../../Settings/Styles/OptionMenuStyles';


const OptionMenu = props => {

    const { colors, styles } = useThemedValues(getStyles);

    const renderOptions = () => {
        return props.options.map((option, index) => {

            const isChecked = option.key === props.selectedOptionKey;
            const svg = isChecked ? Svgs.RadioChecked : Svgs.RadioUnchecked;
            const iconStyle = {
                color: isChecked ? colors[colorNames.settings.radioButtonSelectedIcon]
                        : colors[colorNames.settings.radioButtonUnselectedIcon],

            }

            return (
                <TouchableOpacity key={option.key} style={styles.optionTouchable} 
                    onPress={() => props.onSelect(option.key)}>
                    <View style={styles.iconContainer}>
                        <Icon iconStyle={iconStyle} svg={svg}/>
                    </View>
                    <Text style={styles.optionTitleText}>{option.title}</Text>
                </TouchableOpacity>
            )
        })
        }

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>{props.menuTitle}</Text>
            {renderOptions()}
        </View>
    );
};

export default OptionMenu;

