import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroModule } from './hero/hero.module';
import { PricingModule } from './pricing/pricing.module';
import { AboutUsModule } from './about-us/about-us.module';
import { PrismaService } from './prisma.service';


@Module({
  imports: [HeroModule, PricingModule, AboutUsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}


