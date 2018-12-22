import { Controller, Get, Param } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { Photo } from './photo.entity';

@Controller('photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  @Get('findAll')
  findAll(): Promise<Photo[]> {
    return this.photoService.findAll();
  }

  @Get('findFirst')
  findFirst(): Promise<Photo> {
    return this.photoService.findFirst();
  }

  @Get('findById/:id')
  findById(@Param('id') id: string): Promise<Photo> {
    return this.photoService.findById(+id);
  }
}
