import { $serverAPI } from "@/src/shared/configs/axiosServerConfig"
import { Product } from "../interfaces"
import qs from 'qs'



export const getProducts = async (params: any) => {
    // const query = qs.stringify(params)
    try {
        const { data }: { data: Product[] } = await $serverAPI.get('/products', {
            params: params
        });
        return data;
    } catch (e) {
        console.error(e)
    }
}