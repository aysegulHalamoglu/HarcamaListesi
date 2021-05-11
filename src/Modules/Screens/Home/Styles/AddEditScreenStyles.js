import { StyleSheet } from 'react-native';
import { Fonts, Metrics } from '../../../Constants';

export default StyleSheet.create({
    
    maincontainer:{
        flex: 1,
        flexDirection: 'column',
    },
    exitButtonContainer: {
        flex: 0.05,
        //backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },    
    // VERTICAL TITLE CONTAINER
    leftContainer: {
        flex: 0.75,
        //backgroundColor: 'green',
        alignItems: 'center',
        opacity: 0.2,
    },
    // RIGHT CONTAINER
    rightContainer: {
        flex: 2,        
        flexDirection: 'column',
        //backgroundColor: 'blue',
    },
    // CONTENT CONTAINERS
    categoriesButtonContainer: {
        flex: 0.1,
        //backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    titleContainer:{
        flex: 0.05,
        //backgroundColor: 'orange',
        justifyContent: 'center',
    },
    inputContainer: {
        flex: 0.75,        
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
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: 'lime',
        flexDirection: 'row',
    },
    inputInfoContainer: {
        flex: 0.5,
        //backgroundColor: 'black',
    },

    // TEXT STYLINGS

    verticalTitle: {
        fontFamily: Fonts.Families.bold,
        fontSize: Fonts.Sizes.eighty,
        transform: [{rotate: '-90deg'}],
        width: Metrics.height,
        color: 'red',
        marginTop: Metrics.width * 0.30,
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
        fontSize: Fonts.Sizes.fourty,
        color: 'grey',
    },
    
});
