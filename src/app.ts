// import 'angular2/src/router/router_link';
import 'es6-shim';
import 'es6-promise';
import 'zone.js/dist/zone-microtask';
// import 'zone.js/lib/browser/zone-microtask';
import 'reflect-metadata';
// import 'es7-reflect-metadata';

import 'angular2/core';
import 'angular2/common';
import 'angular2/animate';
import 'angular2/compiler';

import 'angular2/platform/browser';
import 'angular2/src/core/change_detection/parser/lexer';
import 'angular2/src/core/di';
import 'angular2/src/compiler/template_ast';
import 'angular2/src/compiler/html_lexer';
import 'angular2/src/compiler/template_compiler';

// import 'angular2/router';
import 'angular2/src/facade/lang';
import 'angular2/src/router/router';
import 'angular2/src/router/instruction';
import 'angular2/src/router/instruction';
import 'angular2/src/router/async_route_handler';
import 'angular2/src/router/browser_platform_location';
import 'angular2/src/router/component_recognizer';
import 'angular2/src/router/hash_location_strategy';
// import 'angular2/src/router/router_link';
import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';


@Component({
  selector: 'home',
  template: '<h2>home</h2>',
})
export class Home {
  constructor() {}

}
@Component({
  selector: 'about',
  template: '<h2>about</h2>',
})
export class About {
  constructor() {}

}


@Component({
  selector: 'seed-app',
  directives: [ROUTER_DIRECTIVES],
  template: `
  <h3>Angular2 Seed</h3>
  <div>
    <a [routerLink]=" ['/Home'] ">Home</a>
    <a [routerLink]=" ['/About'] ">About</a>
  </div>
  <div>
    <router-outlet></router-outlet>
  </div>
  `,
})
@RouteConfig([
  { path: '/home', component: Home, name: 'Home', useAsDefault: true },
  { path: '/about', component: About, name: 'About' }
])
export class App {
  constructor() {}

}

bootstrap(App, [
  ROUTER_PROVIDERS
])
.catch(err => console.error(err));
