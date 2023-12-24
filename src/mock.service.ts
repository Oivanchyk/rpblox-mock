import { Injectable } from '@nestjs/common';
import { UserIds, UserPresence } from './model';

import * as MOCKED_RESPONSE from './assets/games.json';
import * as moment from 'moment';
@Injectable()
export class MockService {
  generateUserPresences(userIds: UserIds) {
    const userPresence: UserPresence[] = [];
    userIds.userIds.forEach((id) => {
      userPresence.push(this.generateUserPresence(id));
    });
    return userPresence;
  }

  generateUserPresencesWithInvalidCookie(userIds: UserIds) {
    const userPresence: UserPresence[] = [];
    userIds.userIds.forEach((id) => {
      userPresence.push({
        userPresenceType: 2,
        lastLocation: '',
        placeId: null,
        rootPlaceId: null,
        gameId: null,
        universeId: null,
        userId: id,
        lastOnline: moment().utc().format('YYYY-MM-DDTHH:mm:ss.SSS[Z]'),
      });
    });
    return userPresence;
  }

  private generateUserPresence(userid: number): UserPresence {
    const randomPresence = Math.floor(Math.random() * 3);
    const randomGame =
      MOCKED_RESPONSE[Math.floor(Math.random() * MOCKED_RESPONSE.length)];
    return {
      userPresenceType: randomPresence,
      lastLocation:
        randomPresence == 0 || randomPresence == 1
          ? 'Website'
          : randomGame.game_name,
      placeId: 6516141723,
      rootPlaceId: 6516141723,
      gameId:
        randomPresence == 0 || randomPresence == 1 ? null : randomGame.game_id,
      universeId:
        randomPresence == 0 || randomPresence == 1
          ? null
          : randomGame.universe_id,
      userId: userid,
      lastOnline: moment().utc().format('YYYY-MM-DDTHH:mm:ss.SSS[Z]'),
    };
  }
}
