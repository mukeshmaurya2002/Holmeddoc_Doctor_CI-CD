import * as Yup from 'yup';

const validate = {
    PersonalInfoSchema: () => {
        return Yup.object().shape({
            name: Yup.string().trim().required('Name is required').matches(/^[a-zA-Z ]*$/, 'Name should contain only alphabets'),
            gender: Yup.string().required('Gender is required'),
            // birthdate: Yup.date().required('Birthdate is required'),
        })
    },
    profileCompletionPersonalInfo: () => {
        return Yup.object().shape({
            appointmentModeData: Yup.string().required('Appointment mode is required'),
            practitionersBio: Yup.string().required('Practitioners bio is required'),
            consultantRate: Yup.string().required('Consultant Rate is required').matches(/^[0-9]*$/, 'Consultant Rate must be a number'),
        })
    },
    profileCompletionProfessionalInfo: () => {
        return Yup.object().shape({
            insitutionName: Yup.string().required('Institution name is required'),
            medicalEducation: Yup.string().required('Medical education is required'),
            medicalSpeciality: Yup.string().required('Medical speciality is required'),
            medicalCondTreated: Yup.string().required('Medical conditions treated is required'),
        })
    },
    profileCompletionPractiseDetails: () => {
        return Yup.object().shape({
            languageSpoken: Yup.string().required('Language spoken is required'),
            clinicAddress: Yup.string().required('Clinic address is required'),
            servingArea: Yup.string().required('Serving area is required'),

        })
    },
    profileCompletionAdditionalInfo: () => {
        return Yup.object().shape({
            practiseDescription: Yup.string().required('Practise description is required'),
            additionalServingArea: Yup.string().required('Serving area is required'),
            additionalClinicAddress: Yup.string().required('Clinic address is required'),
            PractitionerImage: Yup.string().required('Practitioner image is required').max(1, "Document is required").test("fileSize", "File size is too large", (value: any) => {
                return value && value[0]?.size <= 5000000;
            }),

        })
    },
    ContactInfoSchema: () => {
        return Yup.object().shape({
            phone: Yup.string().required('Phone number is required')
                .matches(/^[0-9]{10,15}$/, 'Phone number is not valid'),
            email: Yup.string()
                .trim()
                .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Email is not valid')
                .required('Email is required')
        })
    },

    AccountSecuritySchema: () => {
        return Yup.object().shape({
            password: Yup.string().required('Password is required'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), ''], 'Passwords must match')
                .required('Confirm Password is required'),
        })
    },
    ChangePasswordValidate: () => {
        return Yup.object().shape({
            oldPassword: Yup.string().required("Old Password is required"),
            newPassword: Yup.string().required("New Password is required"),
            confirmPassword: Yup.string().required("Confirm Password is required").oneOf([Yup.ref('newPassword'), ""], 'Passwords must match')
        });
    },
    profileInsuranceValidate: () => {
        return Yup.object().shape({
            companyList: Yup.string().required("Company List is required")
        });
    },
    ContactUsValidation: () => {
        return Yup.object().shape({
            name: Yup.string().required("Name is required").matches(/^[a-zA-Z ]*$/, 'Name should contain only alphabets'),
            message: Yup.string().required("Message is required"),
        });
    },
    AppointmentSchema: () => {
        return Yup.object().shape({
            insurance: Yup.string().required('Insurance is required'),
            reasonForVisit: Yup.string().required('Reason for your visit is required'),
            // date: Yup.date().required('Date is required').nullable(),
            reason: Yup.string().required('Reason is required'),
            // isVisited: Yup.string().oneOf(['Yes', 'No']).required('Please specify if you have visited before'),
            // visitType: Yup.string().required('Visit type is required'),
            address: Yup.string().required('Clinic address is required'),
            // slot: Yup.string().required('Date & Time availability is required'),
            certify: Yup.boolean().oneOf([true], 'You must certify that the information provided is accurate'),
        });
    },
    LoginValidation: () => {
        return Yup.object().shape({
            phoneNo: Yup.string()
                .required('Phone number is required')
                .matches(/^[0-9]{10,15}$/, 'Phone number is not valid'),
            // .matches(/^\d{3} \d{3} \d{4}$/, 'Phone number is not valid'),
            password: Yup.string()
                .required('Password is required')
                .min(8, 'Password must be at least 8 characters'),
        });
    },
    ForgotPassValidation: () => {
        return Yup.object().shape({
            phoneNo: Yup.string()
                .required('Phone number is required')
                .matches(/^[0-9]{10,15}$/, 'Phone number is not valid'),
            // .matches(/^\d{3} \d{3} \d{4}$/, 'Phone number is not valid'),
        });
    },
    OtpValidation: () => {
        return Yup.object().shape({
            otp: Yup.string()
                .required('OTP is required')
                .length(6, 'Please provide a 6-digit OTP'),
        });
    },
    ResetPassword: () => {
        return Yup.object().shape({
            password: Yup.string().required("New Password is required"),
            cnfPassword: Yup.string().required("Confirm Password is required").oneOf([Yup.ref('password'), ""], 'Passwords must match')
        });
    },
    AddInsuranceValidation: () => {
        return Yup.object().shape({
            insuranceName: Yup.string().required("Insurance name is required"),
            policyNumber: Yup.string().required("Policy number is required"),
            planAndCarrier: Yup.string().required("Plan and carrier is required"),
            documentPdf: Yup.string().required("Document is required").max(1, "Document is required").test("fileSize", "File size is too large", (value) => {
                return value && value[0]?.size <= 5000000;
            }),
            // documentPdf: Yup.string()
            //     .required("Document is required")
            //     .test("fileSize", "File size is too large", function (value) {
            //         if (!value) return false;
            //         const files = JSON.parse(value);
            //         return files && files[0]?.size <= 50;
            //     }),
        });
    },
    AddPatientValidation: () => {
        return Yup.object().shape({
            name: Yup.string().required('Patient name is required').matches(/^[a-zA-Z ]*$/, 'Name should contain only alphabets'),
            phone: Yup.string().required('Phone number is required').matches(/^[0-9]{10,15}$/, 'Phone number is not valid'),
            email: Yup.string().trim().matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Email is not valid'),
            gender: Yup.string().required('Gender is required'),
            birthdate: Yup.string().required('Birthdate is required'),
            address: Yup.string().required('Street address is required'),
            city: Yup.string().required('City is required'),
            pinCode: Yup.string().required('Pincode is required').matches(/^[0-9]{5,6}$/, 'Pincode is not valid'),
            language: Yup.string().required('Language is required'),
            bloodGr: Yup.string().required('Blood Group is required'),
        });
    },
    vitalSignValidation: () => {
        return Yup.object().shape({
            pulse: Yup.number()
                .required('Pulse is required')
                .min(40, 'Pulse should be at least 40')
                .max(180, 'Pulse should be at most 180'),
            weight: Yup.number()
                .required('Weight is required')
                .min(1, 'Weight should be at least 1 kg'),
            height: Yup.number()
                .required('Height is required')
                .min(30, 'Height should be at least 30 cm'),
            temperature: Yup.number()
                .required('Temperature is required')
                .min(35, 'Temperature should be at least 35°C')
                .max(42, 'Temperature should be at most 42°C'),
            RespRate: Yup.number()
                .required('Respiratory rate is required')
                .min(10, 'Respiratory rate should be at least 10 breaths/min')
                .max(40, 'Respiratory rate should be at most 40 breaths/min'),
            pain: Yup.number()
                .required('Pain level is required')
                .min(0, 'Pain level should be at least 0')
                .max(10, 'Pain level should be at most 10'),
            SPO2: Yup.number()
                .required('SPO2 level is required')
                .min(70, 'SPO2 level should be at least 70%')
                .max(100, 'SPO2 level should be at most 100%'),
        });
    }
};


export { validate };
