/// <reference path="../../../typings/_custom.d.ts" />

/*
 * Angular 2
 */
import {Component, View} from 'angular2/annotations';
import {RouteConfig} from 'angular2/router';

/*
 * Directives
 * angularDirectives: Angular's core/form/router directives
 * appDirectives: Our collection of directives from /directives
 */
import {angularDirectives} from 'app/directives/directives';

// Use webpack's `require` to get files as a raw string using raw-loader
let styles   = require('./users.css');
let template = require('./users.html');

// Simple external file component example
@Component({
  selector: 'users'
})
@View({
  directives: [ angularDirectives ],
  // include our .html and .css file
  styles: [ styles ],
  template: template
})
export class Users {
  userslist;
  
  constructor() {
  	this.userslist = [{
      id: 34,
      username: 'batman',
      roles: ['admin', 'user']
    }, {
      id: 67,
      username: 'spiderman',
      roles: ['user']
    }];
  }
}
