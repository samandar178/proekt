import { Injectable } from '@nestjs/common';

@Injectable()
export class PricingService {
  hero = {
    title: 'Learn Any Foreign Language',
    body: 'With our teachers who write a program for each student, you will be able to make your first sketch after the first lesson.',
    imgUrl: 'https://localhost:3000/public/hero.png',
  };
  pricing: any;
  async getpricingDetails() {
    return this.pricing;
  }
  async updatePricingDetails(data: any) {
    if (data.title) {
      this.pricing.title = data.title;
    } else if (data.body) {
      this.pricing.body = data.body;
    } else if (data.imgUrl) {
      this.pricing.imgUrl = data.imgUrl;
    }
  }
  getPricingDetails() {
    throw new Error('Method not implemented.');
  }
}
