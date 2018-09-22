import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GithubService {
  endpoint = 'https://api.github.com/graphql';

  constructor(private http: HttpClient) {}

  searchPublicRepositories(query): Observable<any> {
    const queryString = `
      query {
        search(first:10, type:REPOSITORY, query:"${query}") {
         nodes {
          ... on Repository{
            name,
            id,
            url,
            owner {
              login
            },
            languages(first: 1) {
              nodes {
                name
              }
            },
            releases(last :1) {
              nodes{
                name
              }
            }
          }
         }
        }
      }`;

    return this.http.post(this.endpoint, { query: queryString });
  }
}
