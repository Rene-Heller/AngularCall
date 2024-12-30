import { Component } from '@angular/core';
import {  RouterLink } from '@angular/router';
import {CdkDrag} from '@angular/cdk/drag-drop';

@Component({
    selector: 'app-component-example',
    imports: [
        RouterLink,
        CdkDrag
    ],
    templateUrl: './component-example.component.html',
    styleUrl: './component-example.component.scss'
})
export class ComponentExampleComponent {

}
