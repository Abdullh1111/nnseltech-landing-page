import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProjectService {
  constructor(private prisma: PrismaService) {}
  async create(createProjectDto: CreateProjectDto) {
    return await this.prisma.projects.create({ data: createProjectDto });
  }

  async findAll() {
    return await this.prisma.projects.findMany();
  }

  async findOne(id: number) {
    return this.prisma.projects.findUnique({ where: { id } });
  }

  async update(id: number, updateProjectDto: UpdateProjectDto) {
    return await this.prisma.projects.update({
      where: { id },
      data: updateProjectDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.projects.delete({ where: { id } });
  }
}
