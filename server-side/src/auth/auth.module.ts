import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { PrismaService } from 'src/prisma.service'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'

@Module({
	controllers: [AuthController],
  providers: [AuthService, PrismaService],
  imports: [PassportModule.register({ defaultStrategy: 'jwt' }) ,JwtModule]
})

export class AuthModule {}
