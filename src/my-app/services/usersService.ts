export class UsersService {
  _users;
  constructor() {
    this._users = [{
      id: 34,
      username: 'batman',
      roles: ['admin', 'user'], 
      superuser: true
    }, {
      id: 67,
      username: 'spiderman',
      roles: ['user'],
      superuser: false
    }];
  }
  get() {
    return this._users;
  }
}