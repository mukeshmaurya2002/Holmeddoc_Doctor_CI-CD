import React, { useState } from "react";
import { LoginValues } from "../../type";
import { navigationHook } from "../../../hooks/navigation.hook";
import { useShowpassword } from "../../../hooks/use-show-password.hook"

const useLogin = () => {
    /*
     Custome componets
    */
    const { showPassword, togglePassword } = useShowpassword();
    const { navigateBack, navigateTo } = navigationHook();

    /*
     states and React.hooks 
    */
    const [isCheck, setIsCheckd] = React.useState(false);
    const checkboxRef = React.useRef<any>(null);
    const [checkboxError, setCheckboxError] = useState(false);

    /*
     formik values 
    */
    const initialValues: LoginValues = { phoneNo: '', password: '', };

    /*
     callback functions 
    */
    const toggleCheckBox = () => {
        setIsCheckd(!isCheck);
        setCheckboxError(false);
    }
    const handleLoginPress = () => navigateTo('DrawerStack', { screen: 'Home' })

    return {
        showPassword, togglePassword, navigateBack, navigateTo, isCheck, setIsCheckd, handleLoginPress, checkboxRef,
        toggleCheckBox, initialValues, checkboxError, setCheckboxError
    }
}

export { useLogin }