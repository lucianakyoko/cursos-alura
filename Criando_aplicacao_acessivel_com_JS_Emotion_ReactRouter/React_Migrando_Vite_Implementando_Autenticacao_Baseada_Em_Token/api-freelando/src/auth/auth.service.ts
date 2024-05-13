import { ForbiddenException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User, UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, senha: string): Promise<any> {
    const user = await this.usersService.findOne(email);
    if (user && user.senha === senha) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { senha, ...result } = user;
      return result;
    }
    return null;
  }

  login(user: User) {
    const payload = { email: user.nome, userId: user.userId };
    const tokens = this.getTokens(payload);
    this.updateRefreshToken(user.userId, tokens.refresh_token);
    return tokens;
  }

  register(usuario: User) {
    const { userId } = this.usersService.save(usuario);
    const tokens = this.getTokens({ userId, email: usuario.email });
    this.updateRefreshToken(userId, tokens.refresh_token);
  }

  getTokens(payload: { userId: string; email: string }) {
    const access_token = this.jwtService.sign(
      { ...payload, sub: payload.userId },
      { expiresIn: '15s' },
    );
    const refresh_token = this.jwtService.sign(
      { ...payload, sub: payload.userId },
      { expiresIn: '7d' },
    );

    return {
      access_token,
      refresh_token,
    };
  }

  refreshTokens(userId: string, refreshToken: string) {
    const user = this.usersService.findById(userId);
    debugger
    if (!user || !user.refresh_token) {
      throw new ForbiddenException('Access Denied');
    }

    const refreshTokenMatches = user.refresh_token === refreshToken;

    if (!refreshTokenMatches) {
      throw new ForbiddenException('Access Denied');
    }

    const tokens = this.getTokens({
      email: user.email,
      userId: user.userId,
    });

    this.updateRefreshToken(user.userId, tokens.refresh_token);
    return tokens;
  }

  updateRefreshToken(userId: string, refresh_token: string) {
    this.usersService.updateRefreshToken(userId, refresh_token);
  }
}
