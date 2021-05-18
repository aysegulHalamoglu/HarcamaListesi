import { StyleSheet } from 'react-native';
import { Fonts, Metrics } from '../../../Constants';

export default StyleSheet.create({
    
    maincontainer:{
        flex: 1,
        flexDirection: 'column',
    },
    exitButtonContainer: {
        flex: 0.35,
        alignItems: 'center',
        justifyContent: 'center',
        //backgroundColor: 'yellow',
    },
    container: {
        flex: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        //backgroundColor: 'green',
    },    
    // VERTICAL TITLE CONTAINER
    leftContainer: {
        flex: 1,
        alignItems: 'center',
        opacity: 0.2,
        //backgroundColor: 'green',
    },
    // RIGHT CONTAINER
    rightContainer: {
        flex: 3,        
        flexDirection: 'column',
        //backgroundColor: 'blue',
    },
    // CONTENT CONTAINERS
    categoriesButtonContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical:Metrics.paddingVertical,
        //backgroundColor: 'red',
    },

    categoryTouchable: {
        width: 75,
        height: 75,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.5,
    },
    titleContainer:{
        flex: 1,
        justifyContent: 'center',
        //backgroundColor: 'orange',
    },
    inputContainer: {
        flex: 5,    
        flexDirection: 'column',
        //backgroundColor: 'white',
    },
    addButtonContainer: {
        flex: 0.1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        padding: Metrics.width * 0.1,
        //backgroundColor: 'purple',
    },
    inputCostContainer: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        //backgroundColor: 'lime',
    },
    inputInfoContainer: {
        flex:4,
        //backgroundColor: 'black',
    },

    // TEXT STYLINGS

    verticalTitle: {
        fontFamily: Fonts.Families.bold,
        fontSize: Fonts.Sizes.eighty,
        transform: [{rotate: '-90deg'}],
        width: Metrics.height,
        color: 'red',
        marginTop: Metrics.width * 0.25,
    },
    categoryTitle: {
        fontFamily: Fonts.Families.bold,
        fontSize: Fonts.Sizes.eighteen,
        color: 'grey',
        marginRight: Metrics.width * 0.025,
    },
    costTitle: {
        fontFamily: Fonts.Families.bold,
        fontSize: Fonts.Sizes.twentytwo,
        color: 'grey',
    },
    tlIcon: {
        fontFamily: Fonts.Families.semibold,
        fontSize: Fonts.Sizes.fifty,
        color: '#BC0336',
        marginRight: Metrics.width * 0.025,
    },
    inputCost: {
        fontFamily: Fonts.Families.semibold,
        fontSize: Fonts.Sizes.eighty,
        color: '#BC0336',
    },
    input: {
        fontFamily: Fonts.Families.semibold,
        fontSize: Fonts.Sizes.thirty,
        color: 'grey',
    },
    
});
