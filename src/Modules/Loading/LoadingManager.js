import React from 'react';
import { View, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { useSelector } from 'react-redux';
import { isLoadingSelector } from './LoadingRedux';
import  {Metrics}  from '../Constants';
import LottieView from 'lottie-react-native';

const styles = StyleSheet.create({
    modal: {

    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'transparent',
    },

    lottie:{
        width: Metrics.width*0.5,
    }
})

const LoadingManager = props => {

    const isLoading = useSelector(isLoadingSelector);

    return (
        <Modal
            isVisible={isLoading}
            style={styles.modal}
            animationIn="bounceIn"
            animationOut="bounceOut"
        >
            <View style={styles.container}>
                <LottieView
                    style={styles.lottie}
                    source={require('./animation.json')} autoPlay loop />
            </View>
        </Modal>
    )
}

export default LoadingManager;