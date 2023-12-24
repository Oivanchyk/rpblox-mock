import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { MockService } from './mock.service';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [MockService],
})
export class AppModule {}
