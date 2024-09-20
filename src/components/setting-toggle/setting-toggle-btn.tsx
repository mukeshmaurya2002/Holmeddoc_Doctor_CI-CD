import React from 'react';
import { Pressable } from 'react-native';
import { OffToggle, OnToggle } from '../../../assets/svg';

interface propsType { isOn: boolean, toggleBtn: (value: boolean) => void, color?: string }
const SettingToggleBtn = ({ isOn, toggleBtn, color }: propsType) => {
    const [isbtnOn, setIsOn] = React.useState(isOn);

    const handleToggle = () => {
        const newToggleState = !isbtnOn;
        toggleBtn(newToggleState);
        setIsOn(newToggleState);
    };

    return (
        <Pressable onPress={handleToggle}>
            {isbtnOn ? <OnToggle color={color} /> : <OffToggle />}
        </Pressable>
    );
};

export default SettingToggleBtn;
