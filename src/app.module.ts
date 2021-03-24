import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { ExamplesModule } from './examples/examples.module';

@Module({
  imports: [ExamplesModule],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule {}
