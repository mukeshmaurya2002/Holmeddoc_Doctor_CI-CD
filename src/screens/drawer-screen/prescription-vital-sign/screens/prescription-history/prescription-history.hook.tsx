import { RouteProp, useRoute } from "@react-navigation/native"
import { DrawerStackScreenProps } from "../../../../../routes/type"
import { DocumentProps } from "../../prescription-vital.hook";
import React from "react";


const usePrescriptionHistory = () => {
    const { params: { data } } = useRoute<RouteProp<DrawerStackScreenProps, 'PrescriptionHistory'>>()
    const [Documents, setDocuments] = React.useState<DocumentProps[]>(data);

    const deleteDocument = (uri: string) => setDocuments(prevDocuments => prevDocuments.filter(doc => doc.uri !== uri));
    return { deleteDocument, Documents }
}
export { usePrescriptionHistory }