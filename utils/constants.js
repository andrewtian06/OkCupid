const { Dimensions } = require('react-native');

const { width, height } = Dimensions.get('screen');

export const CARD = {
    WIDTH: width * 0.9,
    HEIGHT: height * 0.60,
    BORDER_RADIUS: 5,
    OUT_OF_SCREEN: width + 0.5 * width,
};

export const COLORS = {
    like: '#00eda6',
    nope: '#ff006f',
};

export const ACTION_OFFSET = 100;