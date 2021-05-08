import { StyleSheet } from 'react-native';
import { Metrics, Fonts } from '../../../Constants';
import { colorNames } from '../../../Theming';

export default StyleSheet.create ({

    container: {
        flex: 1,
        //backgroundColor: '#F2F2F2',
        flexDirection: 'column',
        
    },
    text: {
        fontFamily: Fonts.Families.semibold,
        color: 'white',
    },

    //STACK NAVIGATION CONTAINER

    stackContainer: {
        width: Metrics.width,
        height: Metrics.width * 0.2,
        flexDirection: 'row',
        padding: Metrics.marginHorizontal,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
    },
    profileContainer: {
        width: Metrics.width * 0.40,
        height: Metrics.width * 0.20,
        borderRadius: Metrics.borderRadiusStandard,
        justifyContent: 'center',
    },
    welcomeText: {
        fontFamily: Fonts.Families.light,
        fontSize: 20,
        color: '#202020',
    },
    profileName: {
        fontFamily: Fonts.Families.semibold,
        fontSize: 25,
        color: '#202020',
    },
    settingsIcon: {
        flexDirection: 'row',
        width: Metrics.width * 0.15,
        height: Metrics.width * 0.15,
        borderRadius: Metrics.borderRadiusSmall,
    },

    //ACCOUNT CONTAINER
    accountContainer: {
        width: Metrics.width,
        height: Metrics.width * 0.5,
        //backgroundColor: 'red',
        alignItems: 'center',
        marginTop: 20,
    },
    budgetCard: {
        width: Metrics.width * 0.8,
        height: Metrics.width * 0.5,
        borderRadius: 50,
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

    //TITLE CONTAINER
    titleContainer: {
        width: Metrics.width,
        height: Metrics.width * 0.15,
        // backgroundColor: 'lime',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    titleText: {
        fontSize: 35,
        fontFamily: Fonts.Families.bold,
        color: 'white',
        marginLeft: 10,
    },
    textButton: {
        fontFamily: Fonts.Families.semibold,
        fontSize: 12,
        color: 'white',
        marginRight: 25,
    },
    
    //FLATLIST CONTAINER
    flatListContainer: {
        width: Metrics.width,
        height: Metrics.width * 0.85,
    },
    //TAB NAVIGATION CONTAINER
    tabNavigationContainer : {
        width: Metrics.width,
        height: Metrics.width * 0.3,
        borderTopLeftRadius: 75,
        borderTopRightRadius: 75,
        backgroundColor: 'white',
        opacity: 0.7,       

    }

});