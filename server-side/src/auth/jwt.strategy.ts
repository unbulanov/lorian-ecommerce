import { Injectable, UnauthorizedException } from "@nestjs/common"
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { env } from "process"
import { AuthService } from "./auth.service"

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: env.jwtSecret
    })
  }

  validate(payload: any) {
    const data = this.authService.validateUser(payload)
    if (data) {
      return data
    } else {
      throw new UnauthorizedException()
    }
  }
}