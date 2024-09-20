import React from "react";
import { navigationHook } from "../../../hooks/navigation.hook"

const useDrawerAppointment = () => {
    const { navigateTo } = navigationHook();
    const [isVisible, setIsVisible] = React.useState(false);
    const closeModal = () => setIsVisible(false);
    const openModal = () => setIsVisible(true);

    return {
        navigateTo, isVisible, closeModal, openModal
    }
}

export { useDrawerAppointment }