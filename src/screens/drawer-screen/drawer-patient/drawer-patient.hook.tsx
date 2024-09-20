import { navigationHook } from "../../../hooks/navigation.hook"

const usePatientHook = () => {

const {navigateTo}=navigationHook()



    return {
        navigateTo
    }
}

export { usePatientHook }