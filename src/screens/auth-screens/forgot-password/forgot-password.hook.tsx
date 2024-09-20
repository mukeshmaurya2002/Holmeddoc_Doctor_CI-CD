import { navigationHook } from "../../../hooks/navigation.hook"

const useForgotPass = () => {
    const { navigateTo ,navigateBack} = navigationHook()

    return {
        navigateTo,navigateBack
    }
}

export { useForgotPass }