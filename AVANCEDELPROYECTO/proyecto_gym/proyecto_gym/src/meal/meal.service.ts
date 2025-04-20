import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateMealDto } from './dto/create-meal.dto';
import { UpdateMealDto } from './dto/update-meal.dto';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class MealService extends PrismaClient implements OnModuleInit {
  findAll() {
    throw new Error('Method not implemented.');
  }
  profile: any;
   async onModuleInit() {
    await this.$connect();
    
  }
  
  create(createUserDto: CreateMealDto) {
    return this.profile.create ({
      data: createUserDto
    });
  }

  findOne() {
    return this.profile.findfirst();
  }


  remove(id: string) {
    return this.profile.dalate({where:{id}})
  }
}
