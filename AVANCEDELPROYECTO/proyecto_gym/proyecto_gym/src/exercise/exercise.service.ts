import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class ExerciseService extends PrismaClient implements OnModuleInit {
  findAll() {
    throw new Error('Method not implemented.');
  }
  profile: any;
   async onModuleInit() {
    await this.$connect();
    
  }
  create(createUserDto: CreateExerciseDto) {
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
