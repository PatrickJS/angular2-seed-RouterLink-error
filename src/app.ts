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
