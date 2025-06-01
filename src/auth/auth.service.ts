import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin } from './entity/admin.entity';
import { CreateAdminDto } from './dtos/admin.dto';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { CreateLoginDto } from './dtos/login.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Admin) private readonly adminRepo: Repository<Admin>,
    private readonly jwtService: JwtService,
  ) {}

  async register(dto: CreateAdminDto) {
    const exists = await this.adminRepo.findOneBy({ email: dto.email });
    if (exists) {
      throw new Error('Email already exists');
    }
    const hashedPassword = await bcrypt.hash(dto.password, 10);
    const admin = this.adminRepo.create({
      ...dto,
      password: hashedPassword,
      status: dto.status ?? 1,
    });

    const savedAdmin = await this.adminRepo.save(admin);
    const payload = { sub: savedAdmin.id, email: savedAdmin.email };
    return {
      success: true,
      message: 'Registration successful',
      access_token: this.jwtService.sign(payload),
    };
  }

  async login(dto: CreateLoginDto) {
    const admin = await this.adminRepo.findOneBy({ email: dto.email });
    if (!admin) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const isMatch = await bcrypt.compare(dto.password, admin.password);
    if (!isMatch) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const payload = { sub: admin.id, email: admin.email };
    return {
      success: true,
      message: 'Login successful',
      access_token: this.jwtService.sign(payload),
    };
  }
}
