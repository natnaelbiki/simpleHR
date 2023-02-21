import { Injectable } from '@angular/core';
import { InMemoryDBService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }
  createDb(){
	  let employee = [
		  { id: 1, name: 'abcd' },
		  { id: 2, name: 'bcde' }
	  ];
	  return {employee};
  }

}
