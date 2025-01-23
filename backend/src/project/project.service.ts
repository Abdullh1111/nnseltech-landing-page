import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Injectable()
export class ProjectService {
  constructor(
    private prisma: PrismaService,
    private Cloudinary: CloudinaryService,
  ) {}
  async create(
    createProjectDto: CreateProjectDto,
    mainImage?: Express.Multer.File,
    secondImage?: Express.Multer.File,
    thirdImage?: Express.Multer.File,
  ) {
    try {
      if (mainImage) {
        const { url } = await this.Cloudinary.uploadImage(mainImage);
        createProjectDto.mainImage = url;
      }
      if (secondImage) {
        const { url } = await this.Cloudinary.uploadImage(secondImage);
        createProjectDto.secondImage = url;
      }
      if (thirdImage) {
        const { url } = await this.Cloudinary.uploadImage(thirdImage);
        createProjectDto.thirdImage = url;
      }
      return await this.prisma.projects.create({ data: createProjectDto });
    } catch (err) {
      throw new BadRequestException(
        err?.meta?.cause || err?.message || 'Failed to create project',
      );
    }
  }

  async findAll() {
    try {
      return await this.prisma.projects.findMany();
    } catch (err) {
      throw new BadRequestException(
        err?.meta?.cause || err?.message || 'Failed to fetch projects',
      );
    }
  }

  async findOne(id: number) {
    try {
      return await this.prisma.projects.findUnique({ where: { id } });
    } catch (err) {
      throw new BadRequestException(
        err?.meta?.cause || err?.message || 'Failed to fetch project',
      );
    }
  }

  async update(
    id: number,
    updateProjectDto: UpdateProjectDto,
    mainImage?: Express.Multer.File,
    secondImage?: Express.Multer.File,
    thirdImage?: Express.Multer.File,
  ) {
    try {
      if (mainImage) {
        console.log(mainImage);
        const { url } = await this.Cloudinary.uploadImage(mainImage);
        updateProjectDto.mainImage = url;
      }

      if (secondImage) {
        const { url } = await this.Cloudinary.uploadImage(secondImage);
        updateProjectDto.secondImage = url;
      }

      if (thirdImage) {
        const { url } = await this.Cloudinary.uploadImage(thirdImage);
        updateProjectDto.thirdImage = url;
      }

      const project = await this.prisma.projects.update({
        where: { id },
        data: updateProjectDto,
      });
      return project;
    } catch (err) {
      throw new BadRequestException(
        err?.meta?.cause || err?.message || 'Failed to update project',
      );
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.projects.delete({ where: { id } });
    } catch (err) {
      throw new BadRequestException(
        err?.meta?.cause || err?.message || 'Failed to delete project',
      );
    }
  }
}
