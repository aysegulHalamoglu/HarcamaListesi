import Metrics from './Metrics';

const Sizes = {
    twelve: Metrics.width * 0.033,
    fourteen: Metrics.width * 0.037,
    sixteen: Metrics.width * 0.041,
    eighteen: Metrics.width * 0.045,
    twenty: Metrics.width * 0.049,
    authlogo: Metrics.width * 0.075,
};


const Families = {
    light: 'Quicksand-Light',
    regular: 'Quicksand-Regular',
    medium: 'Quicksand-Medium',
    semibold: 'Quicksand-SemiBold',
    bold: 'Quicksand-Bold',
    logo: 'Overlock-Black',
};

export default {
    Families,
    Sizes
}
