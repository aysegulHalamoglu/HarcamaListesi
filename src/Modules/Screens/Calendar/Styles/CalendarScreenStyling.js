import {StyleSheet} from 'react-native';
import { Metrics, Fonts } from '../../../Constants';
import { colorNames, constantColors } from '../../../Theming/Colors';



export default Colors => StyleSheet.create({

    container: {
      backgroundColor:  Colors[colorNames.calendar.containerbackground],
      marginRight: Metrics.marginHorizontal*0.9,
      marginTop: Metrics.paddingTop*1.4,
      padding: Metrics.width*0.03,
      borderWidth:1,
      borderColor:  Colors[colorNames.calendar.itemContainerBorder],
      borderRadius: Metrics.borderRadiusStandard,
    },   
    
    itemText:{
      color: Colors[colorNames.calendar.itemText],
    },

    dateText:{
      color: Colors[colorNames.calendar.dateText],
    },

    categoryNameContainer:{
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginLeft: Metrics.marginHorizontal,
        backgroundColor: Colors[constantColors.white]
    },
    
    categoryNameText:{
        color: Colors[constantColors.mainColor2],   
    },
    item: {
      backgroundColor: Colors[colorNames.calendar.background],
      flex: 1,
      borderRadius: 5,
      padding: 10,
      marginRight: 10,
      marginTop: 17,
      fontSize:Fonts.Sizes.fourteen,
    },
    emptyDate: {
      height: 15,
      flex: 1,
      paddingTop: 30
    }
  });
  