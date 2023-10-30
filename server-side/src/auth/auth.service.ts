import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { User } from "@prisma/client";

import { hash, verify } from 'argon2';
import { PrismaService } from "src/prisma.service";
import { AuthDto } from "./auth.dto";

@Injectable()
  export class AuthService {
    constructor(private prisma: PrismaService, private jwtService: JwtService) {}

    async login(dto: AuthDto) {
      const user = await this.validateUser(dto)

      return {
        user: this.returnUserFields(user),
        accessToken: await this.issueAccessToken(user.id),
      }
    }

    async register(dto: AuthDto) {
      const oldUser = await this.prisma.user.findUnique({
        where: { email: dto.email }
      })
      if (oldUser) {
        throw new BadRequestException('Email занят')
      }

      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          password: await hash(dto.password),
        }
      })

      return {
        user: this.returnUserFields(user),
        accessToken: await this.issueAccessToken(user.id)
      }
    }

    async validateUser(dto: AuthDto): Promise<User> {
      const user = await this.prisma.user.findUnique({
        where: { email: dto.email }
      })

      if(!user) throw new NotFoundException('User not found')

      const isValidPassword = await verify(user.password, dto.password)
      if (!isValidPassword) throw new UnauthorizedException('Неправильный пароль')

      return user
    }

    async issueAccessToken(userId: number) {
      const data = {
        id: userId,
      }

      return await this.jwtService.signAsync(data, {
        expiresIn: '91d'
      })
    }

    returnUserFields(user: User) {
      return {
        id: user.id,
        email: user.email,
      }
    }
  }