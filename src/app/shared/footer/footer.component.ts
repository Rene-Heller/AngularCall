import { Component } from '@angular/core';

@Component({
selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styles: [`
    footer {
    position: relative;
    height: 128px;
    width: 100%;
    background-color: #06171E;
    >svg {
        height: 128px;
        width: 100%;
      }
    >div {
        position: absolute;
        flex-direction: column;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 0;
        >p {
            color: #627B84;
            font-size: 13px;
            font-style: normal;
            font-weight: 400;
        }
      }
    }
  `]
})
export class FooterComponent {

}
