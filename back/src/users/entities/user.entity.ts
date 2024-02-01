import { Prisma } from "@prisma/client";



export class User implements Prisma.UserCreateInput {
    email: string
    password: string;
    name?: string
    role?: string;
    product?: Prisma.ProductCreateNestedManyWithoutOwnerInput;
}
