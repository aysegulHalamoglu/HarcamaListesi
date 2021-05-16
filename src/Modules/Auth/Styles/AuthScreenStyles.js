import { StyleSheet } from 'react-native';
import {Metrics, Fonts} from '../../Constants';
import { colorNames } from '../../Theming';

const styles = (Colors) => StyleSheet.create({
    
    // Outer container  -> flex: 1 (all of them)
    safeArea: {
        flex: 1,
        backgroundColor: Colors[colorNames.auth.background],
    },
    keyboardAvoiding: {
        flex: 1,
    },
    container: {
        flex:1,
        justifyContent:'space-around'
    },


    // Logo container  -> flex: 0.2
    
    appLogoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: Metrics.width * 0.04,
       
    },
    imageLogo: {
        width:undefined,
        height: Metrics.width*1.04,
        aspectRatio:1,
        resizeMode: 'contain',
    },


    
    // Inputs and Buttons Container  -> flex: 0.4
    authContainer: {
        flex: 2,
        justifyContent: 'space-between',
        paddingVertical: Metrics.width * 0.07,
        paddingHorizontal: Metrics.marginHorizontal,
    },
    inputsContainer: {
        justifyContent: 'center',
     
      
    },
    buttonsContainer: {
        justifyContent: 'center',
        paddingHorizontal: Metrics.marginHorizontal*4,
    },

    inputContainer: {
        marginBottom: Metrics.width * 0.02,
  

    },
    signupTouchable: {
        alignItems: 'center',
        marginTop: Metrics.width * 0.02,
        backgroundColor: Colors[colorNames.auth.paleButtonBackground],

    },
    signupText: {
        fontFamily: Fonts.Families.bold,
        fontSize: Fonts.Sizes.eighteen,
        color: Colors[colorNames.auth.signupText],
    },
 
    
   
    // Footer Container  -> flex: 0.4
    footerContainer: {
        flex: 2,
        alignItems: 'center',

    },
    imageFooter: {
        flex: 1,
    },
    image: {
        flex:1,
        aspectRatio:1.70,
        resizeMode: 'stretch',
    },


    // Loading image
    loadingOverlay: {
        backgroundColor: 'rgba(0,0,0,0.4)',
        position: 'absolute',
        width: Metrics.width,
        height: Metrics.height,
        zIndex: 1,
        justifyContent: 'center',
       
    },

  
});

export default styles;
