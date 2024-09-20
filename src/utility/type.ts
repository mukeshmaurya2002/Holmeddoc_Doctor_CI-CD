interface StatusColors {
    textColor: string;
    backColor: string;
}

// Define the type for the statusColors object
interface StatusColorsMapping {
    Pending: StatusColors;
    Booked: StatusColors;
    Cancelled: StatusColors;
    Completed: StatusColors;
    Rescheduled: StatusColors;
    [key: string]: StatusColors; 
}

type VitalKey = 'Weight' | 'height' | 'pulse' | 'resp' | 'pain' | 'SPO2' | 'BP' | 'temp';

interface Item {
    key: VitalKey;
    value: string;
}
export type {
    StatusColorsMapping,
    Item,VitalKey
}