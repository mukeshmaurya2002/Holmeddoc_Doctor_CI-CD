import React from "react"
import { navigationHook } from "../../hooks/navigation.hook";

const useHomeHook = () => {
    const [selectedSpeciality, setSelectedSpeciality] = React.useState(null);
    const { openDrawer } = navigationHook();
    const showStatusBarRef = React.useRef(false)
    const [imageHeight, setImageHeight] = React.useState(0);
    const [scrollY, setScrollY] = React.useState(0);
    const handleLayout = (event: any) => {
        const { height } = event.nativeEvent.layout;
        setImageHeight(height);
    };
    const handleScroll = React.useCallback((event: any) => {
        const y = event.nativeEvent.contentOffset.y;
        setScrollY(y);
        if (y <= imageHeight) {
            showStatusBarRef.current = true;
        }
    }, [setScrollY, showStatusBarRef, imageHeight]);

    return {
        selectedSpeciality,
        setSelectedSpeciality,
        openDrawer,
        handleLayout,
        handleScroll,
        scrollY,
        showStatusBarRef

    }
}
export { useHomeHook }