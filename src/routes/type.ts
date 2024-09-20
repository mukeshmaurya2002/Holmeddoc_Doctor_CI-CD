import { DocumentProps } from "../screens/drawer-screen/prescription-vital-sign/prescription-vital.hook";
import { VitalKey } from "../utility/type";

type MainStackNavigatorProps = {
    Login: undefined;
    AuthStack: SignUpStackProps;
    DrawerStack: undefined;
    DrawerScreen: DrawerStackScreenProps;
    ProfileCompleteStack: ProfileCompleteScreenProps;
    CalendarAppointmentDetails: undefined;
    SuccessModalScreen: {
        message: string
    },
    AppointmentSectionDetails: undefined,
    ProfileSubmissionInfoModalScreen: {
        message: string
        icon: React.ElementType,
        title: string,
        showButton: boolean,
        btnText: string,
        onPress: () => void
    }
    FailureModalScreen: {
        message: string
    }
    BookAppointmentListing: {
        searchKey?: string
    };
    SearchAppointment: undefined;
    ScheduleAppointment: {
        drName: string
        drImage: string
        jobLocation: string
        spokenLang: string[]
    };
    BookaAppointment: {
        drName: string
        drImage: string
        jobLocation: string
    };
    ReshceduleScreen: {
        drName: string
        drImage: string
        jobLocation: string
        spokenLang: string[]
    };
}

type SignUpStackProps = {
    Onboard: undefined;
    Login: undefined;
    Register: undefined;
    VerifyOtp: {
        isFormForgotPass: boolean;
        mobNo?: number | string;
    };
    ForgotPassword: undefined;
    ResetPassword: undefined;
    TermsAndCondition: undefined;
    PrivacyPolicies: undefined;
}

type DrawerStackScreenProps = {
    Appointments: undefined;
    CalenderFilter: undefined;
    PrescriptionHistory: {
        data: DocumentProps[]
    };
    VitalSigns: {
        data: VitalSign[];
        selectedID: number;
        index?: number;
    };
    Setting: undefined;
    PatientDetails: undefined;
    AddPatient: undefined;
    DrawerPatients: undefined;
    Insurance: undefined;
    Prescriptions: undefined;
    ListYourPractice: undefined;
    AboutUs: undefined;
    ContactUs: undefined;
    PoliciesScreen: undefined;
    PrivacyPolicies: undefined;
    TermsAndCondition: undefined;
    ChangePassword: undefined;
    DrawerAppointment: undefined;
    AppointmentDetails: {
        drImage: string
        drName: string
        jobLocation: string
        rating: number,
        status: string
    };
    AddInsuranceScreen: undefined;
    MyProfile: undefined;
    PersonalInfoScreen: undefined;
    DrawerPrescriptionScreen: undefined;
    DrawerInsuranceScreen: undefined;
    CompletedProfileScreen: undefined;
    ProfessionalInfoScreen: undefined;
    PractiseInfoScreen: undefined;
    AdditionalInfoScreen: undefined;
    AppointmentCalendar: undefined;
}
type ProfileCompleteScreenProps = {
    CompleteProfileScreen: undefined;
    ProfileCompleteTimeSlotScreen: undefined;
    ProfileCompleteInsuranceScreen: undefined;
    ProfileCompleteStepScreen: undefined;
    ProfileCompleteLogoutModal: undefined;
    AddTimeSlot: {
        fromEdit?: boolean
    };
}


interface StatData {
    id: number;
    day: string;
    value: string;
    key: VitalKey;
};
interface VitalSign {
    id: number;
    label: string;
    value: string;
    lastCheckedDate: string;
    statData: StatData[];
};

export type {
    MainStackNavigatorProps,
    SignUpStackProps,
    DrawerStackScreenProps,
    ProfileCompleteScreenProps,
    VitalSign, StatData
}