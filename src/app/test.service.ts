import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * Sample test service
 */
@Injectable()
export class TestService {

  constructor(private http: HttpClient) { }

  public getTestData() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/1');
  }
}
