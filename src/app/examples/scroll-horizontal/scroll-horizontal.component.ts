import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {ScrollingModule} from '@angular/cdk/scrolling';

@Component({
    selector: 'app-scroll-horizontal',
    imports: [ScrollingModule],
    templateUrl: './scroll-horizontal.component.html',
    styleUrl: './scroll-horizontal.component.scss'
})
export class ScrollHorizontalComponent {
  items = [{name:"hallo"},{name:"hallo"},{name:"hallo"},{name:"hallo"},{name:"hallo"},];


}
