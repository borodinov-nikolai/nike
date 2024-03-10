import { $serverAPI } from "@/src/shared/configs/axiosServerConfig"
import { Product } from "../interfaces"




export const getProducts = async () => {
    try {
        const { data }: { data: Product[] } = await $serverAPI.get('/products');
        return data;
    } catch (e) {
        console.error(e)
    }
}