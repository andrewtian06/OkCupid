import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
    View,
    StyleSheet,
    Text,
    FlatList,
    Animated,
    PanResponder,
} from 'react-native';
import HeaderCard from '../components/HeaderCard/HeaderCard';
import Card from '../components/Card/Card';
import { ACTION_OFFSET, CARD } from '../../utils/constants';
import { pets as petsArray } from '../../test/data';

const DATA = [
    {
        source: require('../../assets/pet1.jpg'),
        name: 'First Item',
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
    },
    {
        source: require('../../assets/pet2.jpg'),
        name: 'Second Item',
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    },
    {
        source: require('../../assets/pet3.jpg'),
        name: 'Third Item',
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    }
];

const HomeScreen = props => {

    const [pets, setPets] = useState(petsArray);
    const swipe = useRef(new Animated.ValueXY()).current;
    const tiltSign = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        if (!pets.length) {
            setPets(petsArray);
        }
    }, [pets.length]);

    const panResponder = PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: (_, { dx, dy, y0 }) => {
            swipe.setValue({ x: dx, y: dy });
            tiltSign.setValue(y0 > CARD.HEIGHT / 2 ? 1 : -1);
        },
        onPanResponderRelease: (_, { dx, dy }) => {
            const direction = Math.sign(dx);
            const isActionActive = Math.abs(dx) > ACTION_OFFSET;

            if (isActionActive) {
                Animated.timing(swipe, {
                    duration: 500,
                    toValue: {
                        x: direction * CARD.OUT_OF_SCREEN,
                        y: dy,
                    },
                    useNativeDriver: true,
                }).start(removeTopCard);
            } else {
                Animated.spring(swipe, {
                    toValue: {
                        x: 0,
                        y: 0,
                    },
                    useNativeDriver: true,
                    friction: 5,
                }).start();
            }
        },
    });

    const removeTopCard = useCallback(() => {

        setPets((prevState) => prevState.slice(1));
        swipe.setValue({ x: 0, y: 0 });

    }, [swipe]);

    const handleChoice = useCallback(
        (direction) => {
            props.navigation.navigate('Home')
            setTimeout(() => {

                Animated.timing(swipe.x, {
                    toValue: direction * CARD.OUT_OF_SCREEN,
                    duration: 400,
                    useNativeDriver: true,
                }).start(removeTopCard);

            }, 1000);
        },
        [removeTopCard, swipe.x]
    );

    return (

        <View style={styles.container}>

            {/* Header */}
            <View style={styles.headerContainer}>
                <FlatList
                    horizontal={true}
                    data={DATA}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        < HeaderCard
                            sourceName={item.source}
                            userName={item.name}
                        />
                    )}
                />
            </View>

            <Text style={styles.textSyle}>Recommended Just For You</Text>

            {/* Card Container */}
            <View style={styles.cardContainer}>

                <View style={styles.mainContainer}>

                    {pets
                        .map(({ name, source }, index) => {
                            const isFirst = index === 0;
                            const dragHandlers = isFirst ? panResponder.panHandlers : {};

                            return (
                                <Card
                                    navigation={props.navigation}
                                    key={name}
                                    name={name}
                                    source={source}
                                    isFirst={isFirst}
                                    swipe={swipe}
                                    tiltSign={tiltSign}
                                    {...dragHandlers}
                                    handleChoice={handleChoice}
                                />

                            );
                        })
                        .reverse()}

                </View>

            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flex: 0.3,
        backgroundColor: 'black',
    },
    container: {
        flex: 1,
    },
    cardContainer: {
        flex: 1
    },
    textSyle: {
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 20,
        marginTop: 10
    },
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        marginBottom: 300
    }
});

export default HomeScreen;