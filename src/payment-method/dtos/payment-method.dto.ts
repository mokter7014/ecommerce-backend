import { IsBoolean, IsInt, IsString } from 'class-validator';

export class PaymentMethodDto {
  @IsInt()
  id: number;

  @IsString()
  name: string;

  @IsBoolean()
  isReceived: boolean;

  @IsInt()
  status: number;
}
