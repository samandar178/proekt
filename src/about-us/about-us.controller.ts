import { Body, Controller, Get, Patch, UploadedFile, UseInterceptors } from '@nestjs/common';
import { AboutUsService } from './about-us.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('about-us')
export class AboutUsController {
    aboutusService: any;
     constructor(private aboutusservice: AboutUsService) {}
      @Get()
      getHeroDetails() {
        return this.aboutusService.getHeroDetails();
      }
      @Patch()
      @UseInterceptors(FileInterceptor('aboutUs'))
      updateHeroDetails(
        @UploadedFile() picture: Express.Multer.File,
        @Body() body: any,
      ) {}
    }

