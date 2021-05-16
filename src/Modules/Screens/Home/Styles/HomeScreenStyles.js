import { StyleSheet } from 'react-native';
import { Metrics, Fonts } from '../../../Constants';
import  {colorNames} from "../../../Theming";


const styles = (Colors) => StyleSheet.create({

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
        marginTop: Metrics.marginHorizontal,
    },
    profileContainer: {
        width: Metrics.width * 0.40,
        height: Metrics.width * 0.20,
        borderRadius: Metrics.borderRadiusStandard,
        justifyContent: 'center',
    },
    welcomeText: {
        fontFamily: Fonts.Families.regular,
        fontSize: Fonts.Sizes.sixteen,
        color: Colors[colorNames.home.welcomeText],
    },
    profileName: {
        fontFamily: Fonts.Sizes.regular,
        fontSize:Fonts.Sizes.sixteen,
        color: Colors[colorNames.home.profileName],
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
        marginTop: Metrics.margin,
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
        fontSize: Fonts.Sizes.twenty,
        fontFamily: Fonts.Families.regular,
        color: Colors[colorNames.home.headerExpenses],
        marginLeft: Metrics.marginHorizontal*2,
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
        height: Metrics.width * 0.20,
        marginBottom: Metrics.width * 0.1,
        flexDirection: 'row',
        backgroundColor: Colors[colorNames.home.itemContainer], //rgba(255, 255, 255, 0.5)
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderColor: Colors[colorNames.home.itemContainerBorder],
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
        backgroundColor: Colors[colorNames.home.tabNavigationContainer],
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',   
    },
    addButtonContainer: {
        width: Metrics.width * 0.2,
        height: Metrics.width * 0.2,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: Metrics.paddingBottom,
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
        fontSize: Fonts.Sizes.sixteen,
        color: Colors[colorNames.home.itemText]
    },
    itemDate: {
        fontFamily: Fonts.Families.medium,
        fontSize: Fonts.Sizes.sixteen,
        color: Colors[colorNames.home.itemDate]
    },

    itemCost: {
        fontFamily: Fonts.Families.medium,
        fontSize: Fonts.Sizes.thirty,
        color: Colors[colorNames.home.itemCost],
    },

});

export default styles;