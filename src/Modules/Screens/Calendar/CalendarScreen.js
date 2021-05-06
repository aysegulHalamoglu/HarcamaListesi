import React, { useState } from 'react';
import {TouchableOpacity, View,Text} from 'react-native';
import { Agenda } from 'react-native-calendars';
import { Card } from 'react-native-paper';

import { useThemedStyles} from '../../Theming';
import getStyles from './Styles/CalendarScreenStyling';

const  timeToString =(time) =>{
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  };


const CalendarScreen =()=> {
    const [items, setItems] = useState({});

    const styles = useThemedStyles(getStyles);

    const loadItems = (day) => {
        setTimeout(() => {
          for (let i = -15; i < 85; i++) {
            const time = day.timestamp + i * 24 * 60 * 60 * 1000;
            const strTime = timeToString(time);
            if (!items[strTime]) {
              items[strTime] = [];
              const numItems = Math.floor(Math.random() * 3 + 1);
              for (let j = 0; j < numItems; j++) {
                items[strTime].push({
                  name: 'Item for ' + strTime + ' --> ' + j,
                  height: Math.max(50, Math.floor(Math.random() * 150)),
                });
              }
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
          <TouchableOpacity style={{marginRight: 10, marginTop: 17}}>
            <Card>
              <Card.Content>
                <View style={styles.categoryNameContainer}>
                  <Text>{item.name}</Text>
                </View>
                <Text  style={styles.categoryNameText}>{item.name}</Text>
              </Card.Content>
            </Card>
          </TouchableOpacity>
        );
      };
    

      return (
        <View style={{flex: 1}}>
          <Agenda
            items={items}
            loadItemsForMonth={loadItems}
            selected={'2021-05-05'}
            renderItem={renderItem}
          />
        </View>
      );
    };

export default CalendarScreen;


  