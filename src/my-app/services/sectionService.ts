import {bind, Inject, Injectable} from 'angular2/di';

@Injectable()
export class SectionService {
  _section: string;

  constructor() {
    this._section = 'home';
  }

  setSection(section){
    this._section = section;
  }

  getCurrent(){
    return this._section;
  }
}

// export our injectables for this module
export var sectionInjectables: Array<any> = [
  bind(SectionService).toClass(SectionService)
];