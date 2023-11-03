import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { hash, verify } from 'argon2';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async generateJwtToken(payload: any): Promise<string> {
    return this.jwtService.sign(payload);
  }

  async hashPassword(password: string): Promise<string> {
    return hash(password);
  }

  async comparePasswords(
    hash: string,
    password: string
  ): Promise<boolean> {
    const options = {
      type: await import('argon2').then((m) => m.argon2id),
    };
    return verify(hash, password, options);
  }
}