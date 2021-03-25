import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { ExamplesModule } from './examples/examples.module';
import { CatsService } from './cats/cats.service';
import { OrganizationsModule } from './organizations/organizations.module';

@Module({
  imports: [ExamplesModule, OrganizationsModule],
  controllers: [AppController, CatsController],
  providers: [AppService, CatsService],
})
export class AppModule {}
