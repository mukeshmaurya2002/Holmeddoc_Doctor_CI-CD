import React from "react";
import { navigationHook } from "../../../hooks/navigation.hook";
import { useShowpassword } from "../../../hooks/use-show-password.hook";

const useRegisterHook = () => {
    const { navigateBack, navigateTo } = navigationHook();
    const { showCnfPassword, showPassword, toggleCnfPassword, togglePassword } = useShowpassword();
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const genderData = [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
        { label: 'Other', value: 'other' }
    ]
    return {
        navigateBack,
        navigateTo,
        showCnfPassword,
        showPassword,
        toggleCnfPassword,
        togglePassword,
        setSelectedIndex,
        selectedIndex,
        genderData,
    }
};
export { useRegisterHook }