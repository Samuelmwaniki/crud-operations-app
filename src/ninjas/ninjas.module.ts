import { Module } from '@nestjs/common';
import { NinjasController } from './ninjas.controller';
import { NinjasService } from './ninjas.service';
import { MongooseModule } from '@nestjs/mongoose';
import { NinjaSchema } from './schemas/ninja.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Ninja', schema: NinjaSchema}])],
  controllers: [NinjasController],
  providers: [NinjasService]
})
export class NinjasModule {}
