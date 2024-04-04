import { $serverAPI } from "@/src/shared/configs/axiosServerConfig"
import { Product } from "../interfaces"



export const getProducts = async (params: Record<string, string>) => {
 
    try {
        const { data }: { data: {products: Product[], totalCount: number} } = await $serverAPI.get('/products', {
            params: params
        });
        return data;
    } catch (e) {
        console.error(e)
    }
}