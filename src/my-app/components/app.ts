/// <reference path="../../typings/_custom.d.ts" />

/*
 * Angular 2
 */
import {Component, View} from 'angular2/annotations';
import {RouteConfig} from 'angular2/router';

/*
 * Directives
 */
import {coreDirectives} from 'angular2/angular2';
import {routerDirectives} from 'angular2/router';
import {formDirectives} from 'angular2/forms';

/*
 * Components
 */
// We use a folder if we want separate files
import {Home} from './home/home';
// Otherwise we only use one file for a component
import {Users} from './users/users';
import {Details} from './details/details';

// Use webpack's `require` to get files as a raw string using raw-loader
let styles   = require('./app.css');
let template = require('./app.html');

/*
 * App Component
 * Top Level Component
 * Simple router component example
 */
@Component({
  selector: 'app' // without [ ] means we are selecting the tag directly
})
@View({
  // needed in order to tell Angular's compiler what's in the template
  directives: [
    // Angular's core directives
    coreDirectives,

    // Angular's form directives
    formDirectives,

    // Angular's router
    routerDirectives
  ],
  // include our .css file
  styles: [ styles ],
  template: template
})
@RouteConfig([{ 
    path: '/', 
    as: 'home', 
    component: Home
  }, { 
    path: '/users', 
    as: 'users', 
    component: Users 
  }
])
export class App {
  name: string;
  constructor() {
    this.name = 'angular'; // used in logo
  }
}
