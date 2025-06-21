import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentMethod } from './entity/payment_method.entity';
import { PaymentMethodPublicService } from './services/payment-method-public.service';
import { ApiPaymentMethodController } from './controllers/payment-method-public.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PaymentMethod])],
  providers: [PaymentMethodPublicService],
  controllers: [ApiPaymentMethodController],
})
export class PaymentMethodModule {}
