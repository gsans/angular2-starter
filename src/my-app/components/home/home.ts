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
import {SectionService} from '../../services/sectionService';

// Use webpack's `require` to get files as a raw string using raw-loader
let styles   = require('./home.css');
let template = require('./home.html');

// Simple external file component example
@Component({
  selector: 'home'
})
@View({
  directives: [ angularDirectives ],
  // include our .html and .css file
  styles: [ styles ],
  /*styles: [`h1 { 
    background-color: #F8F8F8;
  }`], */
  template: template
  //template: `<h1>Home</h1>`
})
export class Home {
  date;
  constructor(section: SectionService) {
  	section.setSection('home');
  	this.date = new Date().toString();
  	setInterval(() => this.date = new Date().toString(), 1000);
  }
}
