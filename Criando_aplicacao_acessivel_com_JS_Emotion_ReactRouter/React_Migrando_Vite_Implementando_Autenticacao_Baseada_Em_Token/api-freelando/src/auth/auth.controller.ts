/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Controller,
  Post,
  UseGuards,
  Request,
  Body,
  Req,
  Get,
} from '@nestjs/common';
import { User, UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';
import { RefreshTokenGuard } from './refresh-token.guard';
import {
  ApiProperty,
  ApiOperation,
  ApiOkResponse,
  ApiHeader,
} from '@nestjs/swagger';

class LoginDTO {
  @ApiProperty()
  email?: string;
  @ApiProperty()
  senha?: string;
}

class TokenDTO {
  @ApiProperty()
  access_token?: string;
  @ApiProperty()
  refresh_token?: string;
}

class ProfileDTO {
  @ApiProperty()
  userId: string;
  @ApiProperty()
  perfil?: 'cliente' | 'freelancer';
  @ApiProperty()
  interesse?: string;
  @ApiProperty()
  nome?: string;
  @ApiProperty()
  uf?: string;
  @ApiProperty()
  cidade?: string;
  @ApiProperty()
  email: string;
}

@Controller()
export class AuthController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
  ) {}

  @ApiOperation({ summary: 'Efetuar login' })
  @ApiOkResponse({
    type: TokenDTO,
  })
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req, @Body() credenciais: LoginDTO) {
    return this.authService.login(req.user);
  }

  @Post('auth/register')
  async register(@Body() usuario: User) {
    return this.authService.register(usuario);
  }

  @ApiOkResponse({
    type: TokenDTO,
  })
  @UseGuards(RefreshTokenGuard)
  @Get('auth/refresh')
  refresh(@Req() req) {
    const userId = req.user.userId;
    const refreshToken = req.user['refreshToken'];
    return this.authService.refreshTokens(userId, refreshToken);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  @ApiOkResponse({
    type: ProfileDTO,
  })
  getProfile(@Request() req): ProfileDTO {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { senha, refresh_token, ...result } = this.usersService.findById(
      req.user.userId,
    );
    return result;
  }
}
