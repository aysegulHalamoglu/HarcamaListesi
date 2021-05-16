import React, { useState } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { Agenda } from 'react-native-calendars';
import LinearGradient from 'react-native-linear-gradient';

import { useThemedStyles, colorNames, useThemedColors } from '../../Theming';
import getStyles from './Styles/CalendarScreenStyling';

const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};


const CalendarScreen = () => {
  const [items, setItems] = useState({});

  const styles = useThemedStyles(getStyles);
  const Colors = useThemedColors(getStyles);

  const loadItems = (day) => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if (!items[strTime]) {
          items[strTime] = [];
          const numItems = Math.floor(Math.random() * 3 + 1);

          items[strTime].push({
            name: strTime,
            height: Math.max(50, Math.floor(Math.random() * 150)),
          });

        }
      }

      const newItems = {};
      Object.keys(items).forEach((key) => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    }, 100);
  };

  const renderItem = (item) => {
    return (
      <TouchableOpacity style={styles.container}>
        <View style={styles.categoryNameContainer}>
          <Text style={styles.itemText}>item</Text>
          <Text style={styles.dateText}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const emptyDate = () => {
    return (
        <View style={styles.emptyDate}/>
    );
  };


  return (
    <View style={{ flex: 1 }}>
      <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} colors={Colors[colorNames.home.background]}
        style={{ flex: 1 }}>
        <Agenda
          items={items}
          loadItemsForMonth={loadItems}
          selected={'2021-05-17'}
          renderItem={renderItem}
          renderEmptyData = {emptyDate}
          theme={{
            backgroundColor: Colors[colorNames.calendar.background],
            calendarBackground: Colors[colorNames.calendar.calendarBackground],
            agendaDayTextColor: Colors[colorNames.calendar.agendaDayTextColor],
            agendaDayNumColor: Colors[colorNames.calendar.agendaDayNumColor],
            todayTextColor: Colors[colorNames.calendar.todayTextColor],
            dayTextColor:Colors[colorNames.calendar.dayTextColor],
            selectedDayTextColor: Colors[colorNames.calendar.selectedDayTextColor],
            selectedDayBackgroundColor: Colors[colorNames.calendar.selectedDayBackgroundColor],
            textSectionTitleColor: Colors[colorNames.calendar.textSectionTitleColor],
            textDayFontWeight: 'bold',
            textMonthFontWeight: 'bold',

          }}
        />
      </LinearGradient>
    </View>

  );
};

export default CalendarScreen;


