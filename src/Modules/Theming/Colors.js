import { Images, Svgs } from "../Constants/index";


// hex
export const constantColors = {
    white: '#FFFFFF',
    black: '#000000',
    red:'#B80000',
    transparent: 'transparent',
    mainColor1: '#21475B', // blue
    mainColor2: '#FF7E39', // orange
    mainColor3: '#DFFF00', //yellow

    greys: {
        1: '#383838',
        2: '#ACACAC',
        3: '#868686',
        4: '#202020',
        5: '#707070',
        6: '#53515A',
        
    },

    backgrounds: {
        1:['#F1F2B5', "#C779D0", "#4BC0C8"], //yellow-pink-blue
        2:["#86FDE8", "#ACB6E5"] , //blue-blue
        3:["#0F0C29", "#302B63" , "#0F0C29"],  //darkblue
    },

    status:{
        1: '#86FDE8', //lightblue
        2: '#F1F2B5', //yellow
        3: "#0F0C29", //darkblue
    },

    cards:{
        1:['#EC0076', "#AB48E4", "#6754B7", "#5D9ACF", "#00DCFF"], //colorfulCard
        2:["#135058", "#6A9113"], //greenCard

    },

    container:{
        1: '#292b3e', //bluish
        2: "#4E4376", //blue
        3: '#292b3e', //bluish
        4: "#4E4376", //blue op:
        5: "#1C0021", //darkblue op:

    },
    buttonContainer:{
        orange: '#FFD35B', //orange signup
        yellow: "#FFEE00", //yellow signup

    },

    text:{
        pink: '#C981CE',
        yellow: '#DFFF00',
        green: '#00EE1D',
    }
   
};

const toRGBA = (hexCode, opacity) => {
    let hex = hexCode.replace('#', '');

    if (hex.length === 3) {
        hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
    }

    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    return `rgba(${r},${g},${b},${opacity / 100})`;
};


    const auth = {
        background: 'auth/background',
        status: 'auth/status',
        inputBorder: 'auth/inputBorder',
        inputBackground: 'auth/inputBackground',
        inputText: 'auth/inputText',
        inputPlaceholder: 'auth/inputPlaceholder',
        coloredButtonBackground: 'auth/coloredButtonBackground',
        coloredButtonText: 'auth/coloredButtonText',
        paleButtonBackground: 'auth/paleButtonBackground',
        signupText: 'auth/signupText',
        
        
    };
    const home = {
        background: 'home/background',
        status: 'home/status',
        card: 'home/card',
        welcomeText: 'home/welcomeText',
        profileName: 'home/profileName',
        itemContainer: 'home/itemContainer',
        itemContainerBorder: 'home/itemContainerBorder',
        itemText: 'home/itemText',
        itemDate: 'home/itemDate',
        itemCost: 'home/itemCost',
        tabNavigationContainer: 'home/tabNavigationContainer',
        
    };
    const settings = {
        background: 'settings/background',
        usernameText: 'settings/usernameText',
        userEmailText: 'setting/userEmailText',
        titleText: 'settings/titleText',
        radioButtonUnselectedIcon: 'settings/radioButtonUnselectedIcon',
        radioButtonSelectedIcon: 'settings/radioButtonSelectedIcon',
        radioButtonText: 'settings/radioButtonText',
        signOutButtonBackground: 'settings/signOutButtonBackground',
        signOutButtonBox: 'settings/signOutButtonBox',
        signOutButtonText: 'settings/signOutButtonText',
    };

    const header = {
        background: 'header/background',
        headerborder: 'header/headerborder',
        text: 'header/text',
        backIcon: 'header/backIcon',
        rightIcon: 'header/rightIcon',
    };
    
    const image = {
        appLogoLarge: 'image/appLogoLarge',
        backgroundImage: 'image/backgroundImage',
    };


    const calendar = {
        background: 'calendar/background',
        calendarBackground: 'calendar/calendarBackground',
        containerbackground: 'calendar/containerbackground',
        selectedDayBackgroundColor:'calendar/selectedDayBackgroundColor',
        selectedDayTextColor:'calendar/selectedDayTextColor',
        todayTextColor:'calendar/todayTextColor',
        dayTextColor:'calendar/dayTextColor',
        itemContainerBorder: 'calendar/itemContainerBorder',
        itemText: 'calendar/itemText',
        dateText: 'calendar/dateText',
        agendaDayTextColor: 'calendar/agendaDayTextColor',
        agendaDayNumColor: 'calendar/agendaDayNumColor',
        selectedDateColor: 'calendar/selectedDateColor',
        textSectionTitleColor: 'calendar/textSectionTitleColor',

    };

export const darkColors = {
    // auth
    [auth.background]: constantColors.backgrounds[2],
    [auth.status]: constantColors.status[3] ,
    [auth.inputBorder]: constantColors.transparent,
    [auth.inputBackground]: toRGBA(constantColors.greys[1], 10),
    [auth.inputText]: constantColors.greys[1],
    [auth.inputPlaceholder]: toRGBA(constantColors.greys[1], 40),
    [auth.coloredButtonBackground]: constantColors.greys[1],
    [auth.coloredButtonText]: constantColors.white,
    [auth.paleButtonBackground]: constantColors.transparent,
    [auth.signupText]: constantColors.greys[1],
   
    // home
    [home.background]:constantColors.backgrounds[3],
    [home.status]:constantColors.status[3],
    [home.card]:constantColors.cards[2],
    [home.welcomeText]:toRGBA(constantColors.text.yellow, 70),
    [home.profileName]:toRGBA(constantColors.white, 60),
    [home.headerExpenses]:toRGBA(constantColors.text.yellow, 70),
    [home.itemContainer]:constantColors.container[5],
    [home.itemContainerBorder]:constantColors.greys[5],
    [home.itemText]:constantColors.greys[6],
    [home.itemDate]:constantColors.greys[6],
    [home.itemCost]:constantColors.text.green,
    [home.tabNavigationContainer]:toRGBA(constantColors.black, 50),
    // settings
    [settings.background]: constantColors.backgrounds[3],
    [settings.usernameText]: constantColors.mainColor3,
    [settings.userEmailText]: constantColors.white,
    [settings.titleText]: constantColors.mainColor3,
    [settings.radioButtonUnselectedIcon]: constantColors.greys[2],
    [settings.radioButtonSelectedIcon]: constantColors.mainColor3,
    [settings.radioButtonText]: constantColors.white,
    [settings.signOutButtonBackground]: constantColors.transparent,
    [settings.signOutButtonBox]: constantColors.mainColor3,
    [settings.signOutButtonText]: constantColors.white,
    // header
    [header.background]:  constantColors.status[3],
    [header.headerborder]:  constantColors.white,
    [header.text]: constantColors.mainColor3,
    [header.backIcon]: constantColors.mainColor3,
    [header.rightIcon]: constantColors.greys[1],
    // image
    [image.appLogoLarge]: Images.appLogoLargeDark,
    [image.backgroundImage]: Images.backgroundImageDark,
    // calendar
    [calendar.background]:constantColors.backgrounds[3],
    [calendar.calendarBackground]:constantColors.container[5],
    [calendar.selectedDayBackgroundColor]:toRGBA(constantColors.text.green, 80),
    [calendar.selectedDateColor]:constantColors.mainColor3,
    [calendar.todayTextColor]:constantColors.text.pink,
    [calendar.selectedDayTextColor]:constantColors.white,
    [calendar.dayTextColor]:constantColors.mainColor3,
    [calendar.agendaDayTextColor]:constantColors.mainColor3,
    [calendar.agendaDayNumColor]:toRGBA(constantColors.mainColor3, 80),
    [calendar.textSectionTitleColor]:constantColors.text.pink,
    
    [calendar.containerbackground]:constantColors.container[5],
    [calendar.itemContainerBorder]:constantColors.greys[5],
    [calendar.itemText]:toRGBA(constantColors.white, 80),
    [calendar.dateText]:toRGBA(constantColors.white, 50),

};

export const lightColors = {
    // auth
    [auth.background]: constantColors.backgrounds[2],
    [auth.status]: constantColors.status[1],
    [auth.inputBorder]: constantColors.transparent,
    [auth.inputBackground]: toRGBA(constantColors.white, 50),
    [auth.inputText]: constantColors.text.pink,
    [auth.inputPlaceholder]:constantColors.text.pink,
    [auth.coloredButtonBackground]: constantColors.buttonContainer.orange,
    [auth.coloredButtonText]: constantColors.text.pink,
    [auth.paleButtonBackground]: constantColors.transparent,
    [auth.signupText]: constantColors.white,
   
    // home
    [home.background]:constantColors.backgrounds[1],
    [home.status]:constantColors.status[2],
    [home.card]:constantColors.cards[1],
    [home.welcomeText]:toRGBA(constantColors.greys[5], 70),
    [home.profileName]:toRGBA(constantColors.greys[4], 90),
    [home.headerExpenses]:constantColors.greys[6],
    [home.itemContainer]:constantColors.white,
    [home.itemContainerBorder]:constantColors.white,
    [home.itemText]:constantColors.greys[6],
    [home.itemDate]:constantColors.greys[6],
    [home.itemCost]:constantColors.text.green,
    [home.tabNavigationContainer]:constantColors.white,
    

    // settings
    [settings.background]: constantColors.backgrounds[1],
    [settings.usernameText]: constantColors.text.pink,
    [settings.userEmailText]: constantColors.black,
    [settings.titleText]: constantColors.mainColor1,
    [settings.radioButtonUnselectedIcon]: constantColors.greys[2],
    [settings.radioButtonSelectedIcon]: constantColors.mainColor1,
    [settings.radioButtonText]: constantColors.black,
    [settings.signOutButtonBackground]: constantColors.buttonContainer.orange,
    [settings.signOutButtonBox]: constantColors.transparent,
    [settings.signOutButtonText]:  constantColors.text.pink,

    // header
    [header.background]:  constantColors.status[2],
    [header.headerborder]:  constantColors.greys[2],
    [header.text]: constantColors.mainColor1,
    [header.backIcon]: constantColors.white,
    [header.rightIcon]: constantColors.white,

    // image
    [image.appLogoLarge]: Images.appLogoLargeLight,
    [image.backgroundImage]: Images.backgroundImageLight,

    // calendar
    [calendar.background]:constantColors.backgrounds[2],
    [calendar.calendarBackground]:constantColors.white,
    [calendar.selectedDayBackgroundColor]:constantColors.status[2],
    [calendar.selectedDayTextColor]:constantColors.greys[6],
    [calendar.dayTextColor]:constantColors.greys[6],
    [calendar.todayTextColor]:constantColors.text.pink,
    [calendar.agendaDayTextColor]:constantColors.mainColor1,
    [calendar.agendaDayNumColor]:constantColors.mainColor1,
    [calendar.selectedDateColor]:constantColors.mainColor3,
    [calendar.textSectionTitleColor]:constantColors.text.pink,
    
    [calendar.containerbackground]:constantColors.white,
    [calendar.itemContainerBorder]:constantColors.white,
    [calendar.itemText]:constantColors.greys[6],
    [calendar.dateText]:constantColors.greys[6],
     
};

export const colorNames = {
    auth,
    home,
    settings,
    header,
    image,
    calendar,
}

