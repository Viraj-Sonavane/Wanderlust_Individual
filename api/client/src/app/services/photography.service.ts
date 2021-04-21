import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:3000/api/photography';


const httpOptions = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PhotographyService {

  constructor(private http: HttpClient) { }

  getPhotographyLocation():Observable<any>{
    console.log("getPhotographyLocation....")
    return this.http.get(baseUrl, httpOptions)
  }

  get(id):Observable<any>{
    return this.http.get(`${baseUrl}/${id}`,httpOptions);
  }

  create(data):Observable<any>{
    console.log("in here");
    return this.http.post(baseUrl, data, httpOptions);
  }
  update(id, data): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data, httpOptions);
  }
  delete(id): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`, httpOptions);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl, httpOptions);
  }
  findByLocation(name): Observable<any> {
    return this.http.get(`${baseUrl}?name=${name}`, httpOptions);
  }
}
