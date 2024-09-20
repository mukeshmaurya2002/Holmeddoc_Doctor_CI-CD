import React from "react"
import { navigationHook } from "../../../../../hooks/navigation.hook";


const useAddPatient = () => {
    const [open, setOpen] = React.useState(false);
    const { navigateTo } = navigationHook();
    const genderData = [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
        { label: 'Other', value: 'other' }
    ]

    return {
        genderData, open, setOpen,navigateTo
    }
}

export { useAddPatient }