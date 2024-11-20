import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { ModuleExampleComponent } from './examples/module-example/module-example.component';
import { ComponentExampleComponent } from './examples/component-example/component-example.component';
import { ServiceExampleComponent } from './examples/service-example/service-example.component';
import { DirectiveExampleComponent } from './examples/directive-example/directive-example.component';
import { PipeExampleComponent } from './examples/pipe-example/pipe-example.component';
import { DecoratorExampleComponent } from './examples/decorator-example/decorator-example.component';
import { ScrollHorizontalComponent } from './examples/scroll-horizontal/scroll-horizontal.component';
import { UrlParamsComponent } from './examples/url-params/url-params.component';

export const routes: Routes = [
    { path: '', component:MainContentComponent },
    { path: 'module', component:ModuleExampleComponent },
    { path: 'component', component:ComponentExampleComponent },
    { path: 'service', component:ServiceExampleComponent },
    { path: 'directive', component:DirectiveExampleComponent },
    { path: 'pipe', component:PipeExampleComponent },
    { path: 'decorator', component:DecoratorExampleComponent },
    { path: 'scroll', component:ScrollHorizontalComponent },
    { path: 'url-params', component:UrlParamsComponent },
];
