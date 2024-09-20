import { FormikHelpers } from "formik";
import { Dispatch, SetStateAction } from "react";

type FormData = {
    name: string;
    gender: string;
    phone: string;
    email: string;
    password: string;
    confirmPassword: string;
}

type AccountSecurityProps = {
    showCnfPassword: boolean;
    showPassword: boolean;
    toggleCnfPassword: () => void;
    togglePassword: () => void;
    handleSubmit: (open: any) => void;
    formData: FormData;
    setFormData: Dispatch<SetStateAction<FormData>>;
}

type PersonalInfoProps = {
    genderData: { label: string, value: string }[];
    open?: boolean;
    setOpen?: (open: boolean) => void;
    handleSubmit: (open: any) => void;
    formData: FormData;
    setFormData: Dispatch<SetStateAction<FormData>>;
}

type CommonBtnProps = { btnLabel: string, onPress: () => void }

interface AppointmentFormValues {
    insurance: string;
    reasonForVisit: string;
    date: Date | null;
    reason: string;
    isVisited: 'Yes' | 'No'; // Ensure isVisited is specifically typed
    visitType: string;
    address: string;
    slot: string;
    certify: boolean;
}

type DropdownChangeHandler = (
    field: keyof AppointmentFormValues,
    value: { value: string },
    setFieldValue: (field: string, value: any) => void
) => void;

type FormSubmitHandler = (
    values: AppointmentFormValues,
    formikHelpers: FormikHelpers<AppointmentFormValues>
) => void;

type LoginValues = { phoneNo: string, password: string }
type FormSubmitHandlerLogin = (
    values: LoginValues,
    { resetForm }: FormikHelpers<LoginValues>
) => void;

export type {
    FormData,
    AccountSecurityProps,
    PersonalInfoProps,
    CommonBtnProps,
    DropdownChangeHandler,
    FormSubmitHandler,
    AppointmentFormValues,
    LoginValues,
    FormSubmitHandlerLogin
}
