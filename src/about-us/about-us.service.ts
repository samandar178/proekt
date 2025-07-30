import { Injectable } from '@nestjs/common';

@Injectable()
export class AboutUsService {
  hero = {
    title: 'Learn Any Foreign Language',
    body: 'With our teachers who write a program for each student, you will be able to make your first sketch after the first lesson.',
    imgUrl: 'https://localhost:3000/public/hero.png',
  };
  aboutUs: any;
  async getAboutUSDetails() {
    return this.aboutUs;
  }
  async updateAboutUsDetails(data: any) {
    if (data.title) {
      this.aboutUs.title = data.title;
    } else if (data.body) {
      this.aboutUs.body = data.body;
    } else if (data.imgUrl) {
      this.aboutUs.imgUrl = data.imgUrl;
    }
  }
}
