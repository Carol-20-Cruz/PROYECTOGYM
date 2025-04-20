import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MealService } from './meal.service';
import { CreateMealDto } from './dto/create-meal.dto';
import { UpdateMealDto } from './dto/update-meal.dto';

@Controller('meal')
export class MealController {
  constructor(private readonly workoutService: MealService) {}

  @Post()
  create(@Body() createWorkoutDto: CreateMealDto) {
    return this.workoutService.create(createWorkoutDto);
  }

  @Get()
  findAll() {
    return this.workoutService.findAll();
  }


 
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workoutService.remove(id);
  }
}
