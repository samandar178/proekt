import { Body, Controller, Get, Patch, UploadedFile, UseInterceptors } from '@nestjs/common';
import { PricingService } from './pricing.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('pricing')
export class PricingController {
    constructor(private pricingService: PricingService){}
@Get()
getPricingDetails(){
    return this.pricingService.getPricingDetails();
}
@Patch()
@UseInterceptors(FileInterceptor('price'))
  updateHeroDetails(
    @UploadedFile() picture: Express.Multer.File,
    @Body() body: any,
  ) {}
}
