import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { Admin } from './auth/entity/admin.entity';
import { CategoryModule } from './admin/category/category.module';
import { Category } from './admin/category/entity/category.entity';
import { PaymentMethodModule } from './payment-method/payment-method.module';
import { PaymentMethod } from './payment-method/entity/payment_method.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'mokter',
      password: 'Mokter@1234',
      database: 'ecommerce',
      entities: [Admin, Category, PaymentMethod],
      autoLoadEntities: true,
      synchronize: true, // production এ false রাখবেন
      logging: false,
    }),
    AuthModule,
    CategoryModule,
    PaymentMethodModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
