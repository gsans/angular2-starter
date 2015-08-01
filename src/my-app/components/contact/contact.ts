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
let styles   = require('./contact.css');
let template = require('./contact.html');

// Simple external file component example
@Component({
  selector: 'contact'
})
@View({
  directives: [ angularDirectives ],
  // include our .html and .css file
  styles: [ styles ],
  template: template
})
export class Contact {
  constructor(section: SectionService) {
  	section.setSection('contact');
  }
}
