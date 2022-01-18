import { Repository } from './../../exemplos/app-github/models/repository';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  baseUrl = 'https://api.github.com';

  constructor(private http: HttpClient) { }

  getUserRepositories(username: string): Observable<Repository[]> {
    const url = `${this.baseUrl}/users/${username}/repos`;

    return this.http.get<Repository[]>(url)
  }
}
