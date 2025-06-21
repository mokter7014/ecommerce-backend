import { Controller, Get } from '@nestjs/common';
import { PaymentMethodPublicService } from '../services/payment-method-public.service';

@Controller('api/payment-methods') // plural as per your request
export class ApiPaymentMethodController {
  constructor(
    private readonly paymentMethodService: PaymentMethodPublicService,
  ) {}
  @Get()
  findAll() {
    return this.paymentMethodService.findAll();
  }

  @Get('received')
  findAllReceived() {
    return this.paymentMethodService.findAllReceived();
  }
}
