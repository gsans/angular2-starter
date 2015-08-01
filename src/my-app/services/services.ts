/// <reference path="../../typings/_custom.d.ts" />

import {bind} from 'angular2/di';

import {sectionInjectables} from './sectionService';
import {UsersService} from './usersService';

// Include injectables that you want to have globally throughout our app
export var appServicesInjectables: Array<any> = [
  sectionInjectables,
  UsersService
];
