import { Module } from '@nestjs/common';
import { ModelModule } from './model/model.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { ItemModule } from './item/item.module';
import { MealModule } from './meal/meal.module';
import { DailyModule } from './daily/daily.module';
import { UserModule } from './user/user.module';
import { PesohistoricoModule } from './pesohistorico/pesohistorico.module';
import { AuthModule } from './auth/auth.module';
import { InvitationModule } from './invitation/invitation.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), ModelModule, PrismaModule, ItemModule, MealModule, DailyModule, UserModule, PesohistoricoModule, AuthModule, InvitationModule],
})
export class AppModule {}
