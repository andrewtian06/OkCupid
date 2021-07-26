import React from 'react';
import { Text, View, Image} from 'react-native';
import { styles } from './styles';

const LikeCard = (props) => {
    return (
      <View style={styles.container}>
        <View style={styles.card}>
            <View style={styles.imageWrapper}>
                <Image source={props.source} style={styles.image} />
            </View>
            <View style={styles.titleWrapper}>
                <Text style={styles.textTitle}>{props.Title}</Text>
            </View>
            <View style={styles.descriptionWrapper}>
                <Text style={styles.textDescription}>{props.Description}</Text>
            </View>
        </View>
      </View>
      
    );
}

export default LikeCard;