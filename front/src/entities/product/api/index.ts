import { $serverAPI } from "@/src/shared/configs/axiosServerConfig"
import { Product } from "../interfaces"
import qs from 'qs'



export const getProducts = async (params: Record<string, string>) => {
 
    try {
        const { data }: { data: Product[] } = await $serverAPI.get('/products', {
            params: params
        });
        return data;
    } catch (e) {
        console.error(e)
    }
}