import { View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import Lottie from 'lottie-react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../constants/responsive';
import LoaderJson from "../../../assets/json/Loader.json"
const Loader = () => {
    const animationRef = useRef<Lottie>(null)
    useEffect(() => {
        animationRef.current?.play();
    }, [])
 
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Lottie speed={1} ref={animationRef} style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT }} source={LoaderJson} />
        </View>
    )
}
 
export default Loader