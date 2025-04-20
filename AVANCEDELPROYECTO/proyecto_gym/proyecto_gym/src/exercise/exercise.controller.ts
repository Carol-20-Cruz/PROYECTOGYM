import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExerciseService } from './exercise.service';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';

@Controller('exercise')
export class ExerciseController {
  constructor(private readonly workoutService: ExerciseService) {}

  @Post()
  create(@Body() createWorkoutDto: CreateExerciseDto) {
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
