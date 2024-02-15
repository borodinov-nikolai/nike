

export class CreateUserDto{
    email: string
    password: string
    login: string
    phoneNumber: string
    name?: string
    surname?: string
}

export class UpdateUserDto{
    email: string
    login: string
    phoneNumber: string
    name?: string
    surname?: string
}