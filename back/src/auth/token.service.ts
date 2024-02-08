import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { DbService } from "src/db/db.service";





type Payload = {
    id: number,
    role: "ADMIN" | "MODERATOR" | "AUTHOR" | "USER"
}


@Injectable()
export class TokenService {
    constructor(private jwtService: JwtService, private db: DbService) { }




    async generateTokens({ id, role }: Payload) {

        const payload = { id, role }
        const accessToken = await this.jwtService.signAsync(payload, { secret: process.env.JWT_SECRET, expiresIn: '1d', });
        const refreshToken = await this.jwtService.signAsync(payload, { secret: process.env.JWT_SECRET, expiresIn: '30d', });

        const refreshTokenInDb = await this.db.refreshToken.findUnique({
            where: {
                userId: id
            }
        })


        if (refreshTokenInDb) {
            await this.db.refreshToken.update({
                where: { userId: id },
                data: {
                    userId: id,
                    token: refreshToken
                }
            })
        } else {
            await this.db.refreshToken.create({
                data: {
                    userId: id,
                    token: refreshToken
                }
            })
        }


        return { accessToken, refreshToken }
    }




    async verifyToken(token: string) {

        return await this.jwtService.verify(token, { secret: process.env.JWT_SECRET })
    }


    async decodeToken(token: string) {
        const payload: Payload = await this.jwtService.decode(token)
        return payload
    }

    async compareRefreshTokens({ userId, token }: { userId: number, token: string }) {


        const tokenFromDb = await this.db.refreshToken.findUnique({
            where: {
                userId
            }
        })

        if (!tokenFromDb) {
            return false
        }

        if (tokenFromDb.token === token) {
            return true

        }

        return false


    }



}