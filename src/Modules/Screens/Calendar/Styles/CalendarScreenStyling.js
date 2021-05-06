import {StyleSheet} from 'react-native';
import { Metrics, Fonts } from '../../../Constants';
import { colorNames, constantColors } from '../../../Theming/Colors';



export default Colors => StyleSheet.create({
    
    categoryNameContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors[constantColors.transparent]
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
  