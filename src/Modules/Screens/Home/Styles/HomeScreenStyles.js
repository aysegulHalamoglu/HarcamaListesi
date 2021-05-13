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
        fontSize: Fonts.Sizes.thirty,
        fontFamily: Fonts.Families.bold,
        color: 'white',
        marginLeft: 10,
    },
    textButton: {
        fontSize: Fonts.Sizes.twelve,
        fontFamily: Fonts.Families.semibold,
        color: 'white',
        marginRight: 25,
    },
    
    //FLATLIST CONTAINER
    flatListContainer: {
        flex:1,
        width: Metrics.width,
        height: Metrics.width * 0.85,
        justifyContent: 'center',
        alignItems: 'center',
    },
    flatList: {
        width: Metrics.width * 0.9,
        height: Metrics.width * 0.25,
        marginBottom: Metrics.width * 0.1,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 20,
        },
        
    columnWrapperStyle: {
        // backgroundColor: 'yellow',
        justifyContent: 'space-between',
        paddingBottom: Metrics.width * 0.03,
    },
    //TAB NAVIGATION CONTAINER
    tabNavigationContainer : {
        width: Metrics.width,
        height: Metrics.width * 0.21,
        borderTopLeftRadius: 75,
        borderTopRightRadius: 75,
        backgroundColor: 'white',
        opacity: 0.7,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',   
    },
    addButtonContainer: {
        width: Metrics.width * 0.2,
        height: Metrics.width * 0.2,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 10,
    },

    //BASE EKLEME
    separator: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    itemTouchable: {
        marginVertical: Metrics.width * 0.02,
        paddingVertical: Metrics.width * 0.02,
    },
    itemText: {
        fontFamily: Fonts.Families.medium,
        fontSize: 16,
    },

});