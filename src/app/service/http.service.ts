import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_URL = 'http://analytics.sfeir.com';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  runEditorJob(editorName: string): Observable<any> {
    return this.http.get(`${BASE_URL}/admin/runJob?editorName=` + editorName);
  }

  runMediaJob(mediaName: string): Observable<any> {
    return this.http.get(`${BASE_URL}/admin/runJob?mediaName=` + mediaName);
  }
}
