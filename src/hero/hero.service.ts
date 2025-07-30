import { Injectable } from '@nestjs/common';

@Injectable()
export class HeroService {
 hero = {
      title: 'Learn Any Foreign Language',
      body: 'With our teachers who write a program for each student, you will be able to make your first sketch after the first lesson.',
      imgUrl: 'https://localhost:3000/public/hero.png',
    };
  async getHeroDetails(){
    return this.hero;
  }
  async updateHeroDetails(data: any){
   if(data.title){
    this.hero.title = data.title;
   } else if(data.body){
    this.hero.body = data.body;
   } else if(data.imgUrl){
    this.hero.imgUrl = data.imgUrl
   }
  }
}
