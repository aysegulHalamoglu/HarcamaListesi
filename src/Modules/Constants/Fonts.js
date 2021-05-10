import Metrics from './Metrics';

const Families = {
    light: 'Quicksand-Light',
    regular: 'Quicksand-Regular',
    medium: 'Quicksand-Medium',
    semibold: 'Quicksand-SemiBold',
    bold: 'Quicksand-Bold',
    logo: 'Overlock-Black',
};

const Sizes = {
    twelve: Metrics.width * 0.033,
    fourteen: Metrics.width * 0.037,
    sixteen: Metrics.width * 0.041,
    eighteen: Metrics.width * 0.045,
    twenty: Metrics.width * 0.049,
    twentytwo: Metrics.width * 0.055,
    thirty: Metrics.width * 0.077,
    fourty: Metrics.width * 0.099,
    authlogo: Metrics.width * 0.075,
};

export default {
    Families,
    Sizes
}
