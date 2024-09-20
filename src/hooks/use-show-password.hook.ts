import { useState } from 'react';
const useShowpassword = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showCnfPassword, setShowCnfPassword] = useState<boolean>(false);
    const [showOldPassword, setShowOldPassword] = useState<boolean>(false);

    const togglePassword = () => {
        setShowPassword(!showPassword);
    }

    const toggleCnfPassword = () => {
        setShowCnfPassword(!showCnfPassword);
    }

    const toggleOldPassword = () => {
        setShowOldPassword(!showOldPassword);
    }

    return {
        togglePassword,
        showPassword,
        showCnfPassword,
        toggleCnfPassword,
        toggleOldPassword,
        showOldPassword
    }
}
export { useShowpassword }