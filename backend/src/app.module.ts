import { Module } from '@nestjs/common';
import { ProjectModule } from './project/project.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';

@Module({
  imports: [ProjectModule, CloudinaryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
