import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ServiceContainerComponent } from './service-example/service-container/service-container.component';


export const routes: Routes = [
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'service-test', component: ServiceContainerComponent },
  { path: '**', redirectTo: 'landing-page' },
  // { path: 'component', component:ComponentExampleComponent },
  // { path: 'service', component:ServiceExampleComponent },
  // { path: 'directive', component:DirectiveExampleComponent },
  // { path: 'pipe', component:PipeExampleComponent },
  // { path: 'decorator', component:DecoratorExampleComponent },
  // { path: 'scroll', component:ScrollHorizontalComponent },
  // { path: 'url-params', component:UrlParamsComponent },
];
