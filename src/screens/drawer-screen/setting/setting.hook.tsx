import React from "react"
interface DataProps { id: number, label: string, isEnabled: boolean }

const useSettings = () => {

    const [settOption, setSettOption] = React.useState({
        newNotification: false,
        cancelNotification: false,
        rescheduleNotification: false,
        reminderNotification: false
    })
    const data: DataProps[] = [
        {
            id: 1,
            label: 'Send notifications for new appointments',
            isEnabled: settOption.newNotification
        },
        {
            id: 2,
            label: 'Send notifications when someone cancels the appointments',
            isEnabled: settOption.cancelNotification
        },
        {
            id: 3,
            label: 'Send notifications when someone reschedules the appointments',
            isEnabled: settOption.rescheduleNotification
        },
        {
            id: 4,
            label: 'Send reminder for upcoming appointments ',
            isEnabled: settOption.reminderNotification
        },
    ]
    const handleToggleChange = ({id,value}:{id: number, value: boolean}) => {
        switch (id) {
            case 1:
                setSettOption({ ...settOption, newNotification: value });
                break;
            case 2:
                setSettOption({ ...settOption, cancelNotification: value });
                break;
            case 3:
                setSettOption({ ...settOption, rescheduleNotification: value });
                break;
            case 4:
                setSettOption({ ...settOption, reminderNotification: value });
                break;
            default:
                break;
        }
    };

    return {
        data,handleToggleChange
    }
}

export { useSettings }
export type { DataProps }