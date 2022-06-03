import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MiServicioService {
  constructor(private http: HttpClient) {}

  // public postTranslate(text:string, target:string, source:string):Observable<any>{

  // const httpOptions = {
  //     headers: new HttpHeaders({  'content-type': 'application/x-www-form-urlencoded',
  // 'Accept-Encoding': 'application/gzip',
  // 'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
  //'X-RapidAPI-Key': '7aa5966e89msh9378786283a101fp162643jsneaeb96b39428'     }),
  //}
  //
  //const body = new HttpParams()
  //.set('q', text)
  //.set('target', target)
  //.set('source', source);
  //
  //return this.http.post('https://google-translate1.p.rapidapi.com/language/translate/v2',//body,  httpOptions);
  //
  //  }

  //public getLibros(name:String):Observable<any>{
  ///    const httpOptions = {
  //headers: new HttpHeaders({
  //      'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com',
  //'X-RapidAPI-Key': '7aa5966e89msh9378786283a101fp162643jsneaeb96b39428'
  //})
  //
  //}
  //return this._http.get('https://hapi-books.p.rapidapi.com/search/'+name, httpOptions);
  //}
}
