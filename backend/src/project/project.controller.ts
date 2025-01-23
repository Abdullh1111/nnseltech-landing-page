import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { AnyFilesInterceptor } from '@nestjs/platform-express';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post()
  create(
    @Body() createProjectDto: CreateProjectDto,
    @UploadedFiles() files: Array<Express.Multer.File>,
  ) {
    let mainImage, secondImage, thirdImage;
    if (files && files.length > 0) {
      mainImage = files.find((file) => file.fieldname === 'mainImage');
      secondImage = files.find((file) => file.fieldname === 'secondImage');
      thirdImage = files.find((file) => file.fieldname === 'thirdImage');
    }
    return this.projectService.create(
      createProjectDto,
      mainImage,
      secondImage,
      thirdImage,
    );
  }

  @Get()
  findAll() {
    return this.projectService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectService.findOne(+id);
  }

  @Put(':id')
  @UseInterceptors(
    AnyFilesInterceptor({
      limits: {
        fileSize: 5 * 1024 * 1024, // 5MB file size limit
      },
    }),
  )
  update(
    @Param('id') id: string,
    @Body() updateProjectDto: UpdateProjectDto,
    @UploadedFiles() files: Array<Express.Multer.File>,
  ) {
    let mainImage, secondImage, thirdImage;
    if (files && files.length > 0) {
      mainImage = files.find((file) => file.fieldname === 'mainImage');
      secondImage = files.find((file) => file.fieldname === 'secondImage');
      thirdImage = files.find((file) => file.fieldname === 'thirdImage');
    }
    return this.projectService.update(
      +id,
      updateProjectDto,
      mainImage,
      secondImage,
      thirdImage,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectService.remove(+id);
  }
}
