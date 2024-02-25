

export class CreateUserDto{
    email: string
    password: string
    login: string
    role?: "ADMIN"|"MODERATOR"|"AUTHOR"|"USER"
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