import { StyleSheet } from 'react-native';
import { CARD } from '../../../utils/constants';

export const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        height: CARD.HEIGHT,
        borderRadius: CARD.BORDER_RADIUS,
        borderColor: 'grey',
        borderWidth: 1,
        margin: 10,
        width: CARD.WIDTH,
        paddingBottom: 30,
        backgroundColor: 'white'
    },
    image: {
        width: '100%',
        height: CARD.HEIGHT / 2,
    },
    name: {
        left: 22,
        top: 10,
        fontSize: 25,
        fontWeight: 'bold',
        color: '#000',
    },
    choiceContainer: {
        position: 'absolute',
        top: 100,
    },
    likeContainer: {
        left: 45,
        transform: [{ rotate: '-30deg' }],
    },
    nopeContainer: {
        right: 45,
        transform: [{ rotate: '30deg' }],
    },
    ageText: {
        left: 22
    },
    border: {
        borderBottomColor: 'grey',
        borderBottomWidth: 0.7,
        top: 20
    },
    descriptionTitle: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    description: {
        marginTop: 10,
        marginRight: 40,
        fontSize: 15
    },
    descriptionContainer: {
        left: 22,
        marginTop: 35
    },
    seeFull: {
        fontWeight: 'bold',
        color: 'blue',
        fontSize: 15,
        marginTop: 20,
        marginBottom: 200
    }
});
