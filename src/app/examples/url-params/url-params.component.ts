import { NgClass } from '@angular/common';
import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-url-params',
    imports: [NgClass],
    templateUrl: './url-params.component.html',
    styleUrl: './url-params.component.scss'
})
export class UrlParamsComponent {

  @ViewChild('urlInput') urlInputRef: ElementRef | undefined;
  queryParams: { [key: string]: string } = {};
  urlInput = "";
  urlBackground = "bg-daBlue_70";
  allSrcs = false;
  firstSrc = false;
  secondSrc = false;
  thirdSrc = false;
  fourthSrc = false;
  text = ""

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.urlBackground = params['urlBackground'];
      this.allSrcs = !!params['allSrcs'];
      this.firstSrc = !!params['firstSrc'];
      this.secondSrc = !!params['secondSrc'];
      this.thirdSrc = !!params['thirdSrc'];
      this.fourthSrc = !!params['fourthSrc'];
      this.queryParams = params;
      console.log('Received query params:', params);
    });
  }

  changeUrl() {
    const urlValue = this.urlInputRef?.nativeElement.value;
    const queryParams: { [key: string]: string } = this.parseQueryParams(urlValue);
    this.router.navigate(['/url-params'], { queryParams });
    console.log(urlValue)
  }

  private parseQueryParams(input: string): { [key: string]: string } {
    const params: { [key: string]: string } = {};
    const keyValuePairs = input.split('&');

    keyValuePairs.forEach(pair => {
      const [key, value] = pair.split('=');// destructuring
      if (key && value) {
        params[key.trim()] = value.trim();
      }
    });

    return params;
  }

  consoleValue(event: any) {

    console.log(event.target.value)
    this.text = event.target.value
  }

}
