import React, { useCallback } from 'react';
import { Animated, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Choice from '../Choice/Choice';
import { ACTION_OFFSET } from '../../../utils/constants';
import { styles } from './style';

export default function Card({
    name,
    source,
    isFirst,
    swipe,
    tiltSign,
    navigation,
    handleChoice,
    ...rest
}) {
    const rotate = Animated.multiply(swipe.x, tiltSign).interpolate({
        inputRange: [-ACTION_OFFSET, 0, ACTION_OFFSET],
        outputRange: ['8deg', '0deg', '-8deg'],
    });

    const likeOpacity = swipe.x.interpolate({
        inputRange: [25, ACTION_OFFSET],
        outputRange: [0, 1],
        extrapolate: 'clamp',
    });

    const nopeOpacity = swipe.x.interpolate({
        inputRange: [-ACTION_OFFSET, -25],
        outputRange: [1, 0],
        extrapolate: 'clamp',
    });

    const animatedCardStyle = {
        transform: [...swipe.getTranslateTransform(), { rotate }],
    };

    const renderChoice = useCallback(() => {
        return (
            <>
                <Animated.View
                    style={[
                        styles.choiceContainer,
                        styles.likeContainer,
                        { opacity: likeOpacity },
                    ]}
                >
                    <Choice type="like" />
                </Animated.View>
                <Animated.View
                    style={[
                        styles.choiceContainer,
                        styles.nopeContainer,
                        { opacity: nopeOpacity },
                    ]}
                >
                    <Choice type="nope" />
                </Animated.View>
            </>
        );
    }, [likeOpacity, nopeOpacity]);


    return (
        <Animated.View
            style={[styles.container, isFirst && animatedCardStyle]}
            {...rest}
        >
            <ScrollView showsVerticalScrollIndicator={false}>
                <Image source={source} style={styles.image} />

                <View>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={{ left: 22, top: 10 }}>20 {'\u30FB'} Jakarta</Text>
                    <View
                        style={styles.border}
                    />
                </View>

                <View style={styles.descriptionContainer}>
                    <Text style={styles.descriptionTitle}>My self-summary</Text>

                    <Text style={styles.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>

                    <TouchableOpacity onPress={() => navigation.navigate('CardDetails', {
                        handleChoice
                    })}>
                        <Text style={styles.seeFull}>SEE FULL PROFILE</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>

            {isFirst && renderChoice()}
        </Animated.View>

    );


}
