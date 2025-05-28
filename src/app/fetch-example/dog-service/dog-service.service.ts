import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Dog } from '../dog-data';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogServiceService {
  dogList: Dog[] = [];
  http = inject(HttpClient)

  constructor() { }

  fetchDogs() {
    return this.http.get<{ message: string[] }>('https://dog.ceo/api/breed/hound/list').pipe(
      map(res => Object.values(res.message))
    );
  }
}
