import {
  Body,
  Controller,
  Get,
  Patch,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { get } from 'http';
import { title } from 'process';
import { HeroService } from './hero.service';
import { FileInterceptor } from '@nestjs/platform-express';
@Controller('hero')
export class HeroController {
  constructor(private heroService: HeroService) {}
  @Get()
  getHeroDetails() {
    return this.heroService.getHeroDetails();
  }
  @Patch()
  @UseInterceptors(FileInterceptor('image'))
  updateHeroDetails(
    @UploadedFile() picture: Express.Multer.File,
    @Body() body: any,
  ) {}
}
