import { Body, Controller, Post } from '@nestjs/common';
import { MockService } from './mock.service';
import { UserIds } from './model';
import { sleep } from './sleep';

@Controller('/users')
export class UsersController {
  constructor(private readonly mockService: MockService) {}

  @Post('/v1/presence/users')
  async getUsersPresence(@Body() userIds: UserIds) {
    await sleep(130);
    return this.mockService.generateUserPresences(userIds);
  }

  @Post('/invalid-cookie/v1/presence/users')
  async getUsersPresenceWithInvalidCookie(@Body() userIds: UserIds) {
    await sleep(130);
    return this.mockService.generateUserPresencesWithInvalidCookie(userIds);
  }
}
