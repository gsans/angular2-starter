/// <reference path="../../../typings/_custom.d.ts" />

/*
 * Angular 2
 */
import {Component, View} from 'angular2/annotations';

/*
 * Directives
 * angularDirectives: Angular's core/form/router directives
 * appDirectives: Our collection of directives from /directives
 */
import {angularDirectives} from 'app/directives/directives';

// Use webpack's `require` to get files as a raw string using raw-loader
let styles   = require('./details.css');
let template = require('./details.html');

// Simple external file component example
@Component({
  selector: 'details'
})
@View({
  directives: [ angularDirectives ],
  // include our .html and .css file
  styles: [ styles ],
  template: template
})
export class Details {
  user;
  
  constructor() {
  	this.user = {
      id: 34,
      username: 'batman',
      roles: ['admin', 'user']
    };
  }
}
