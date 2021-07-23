import React from 'react';
import {Text, View, Platform} from 'react-native';
import {
  TouchableRipple,
} from 'react-native-paper';
import { styles } from './styles';

const SettingList = (props) => {
    return (
      <View style={[styles.menuBox, {marginTop: props.marginTop,}]}>
        <TouchableRipple onPress={props.onPress}>
            <View style={styles.menuItem}>
                <Text style={styles.menuItemText}>{props.Title}</Text>
            </View>
        </TouchableRipple>
      </View>
    );
}

export default SettingList;