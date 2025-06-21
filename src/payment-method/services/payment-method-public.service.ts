import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaymentMethod } from '../entity/payment_method.entity';
import { Repository } from 'typeorm';
import { PaymentMethodDto } from '../dtos/payment-method.dto';

@Injectable()
export class PaymentMethodPublicService {
  constructor(
    @InjectRepository(PaymentMethod)
    private readonly paymentMethodRepo: Repository<PaymentMethod>,
  ) {}
  async findAll(): Promise<PaymentMethodDto[]> {
    const paymentMethods = await this.paymentMethodRepo.find({
      where: { isReceived: false, status: 1 },
    });
    return paymentMethods;
  }

  async findAllReceived(): Promise<PaymentMethodDto[]> {
    const paymentMethods = await this.paymentMethodRepo.find({
      where: { isReceived: true, status: 1 },
    });
    return paymentMethods;
  }
}
