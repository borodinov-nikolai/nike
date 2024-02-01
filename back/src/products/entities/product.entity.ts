import { Prisma } from "@prisma/client";



export class Product implements Prisma.ProductCreateInput {
    name: string
    price: number;
}
