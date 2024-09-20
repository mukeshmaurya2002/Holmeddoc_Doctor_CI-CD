import { AsyncStorageStatic } from "@react-native-async-storage/async-storage";

interface ResponseData {
    success: boolean | number;
    data: { result: any[] };
    message?: string;
}
interface FetchPayload {
    response: ResponseData;
    pageNo: number;
}

type PersistConfigProps = {
    key: string,
    storage: AsyncStorageStatic,
    whitelist: ''[],
}


export type { PersistConfigProps,FetchPayload }