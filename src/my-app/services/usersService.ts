export class UsersService {
  _users;
  constructor() {
    this._users = [{
      id: 34,
      username: 'batman',
      roles: ['admin', 'user']
    }, {
      id: 67,
      username: 'spiderman',
      roles: ['user']
    }];
  }
  get() {
    return this._users;
  }
}