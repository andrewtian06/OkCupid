import React from 'react';
import {Text, View, Platform} from 'react-native';
import {
  TouchableRipple,
} from 'react-native-paper';
import { styles } from './styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const PreferenceCard = (props) => {
    return (
      <View style={[styles.menuBox, {marginBottom: props.marginBottom}]}>
        <TouchableRipple onPress={props.onPress}>
            <View style={styles.menuItem}>
                <Text style={styles.menuItemText}>{props.Title}</Text>
                <Icon
                    name='chevron-right'
                    size={20}
                    style={{
                        alignItems: 'flex-end',
                    }}
                />
            </View>
        </TouchableRipple>
      </View>
      
    );
}

export default PreferenceCard;