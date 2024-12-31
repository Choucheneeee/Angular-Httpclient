import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';  // Import the tap operator
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShareserviceService {

  constructor(private http:HttpClient) {

   }


   getstudents(): Observable<any[]> {
    return  this.http.get<any[]>('http://localhost:3000/students');  // Assuming this endpoint returns an array
  }

  getOneStudent(id: string): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/student/${id}`);
  }

  addNewStudent(profile:any){
    return this.http.post('http://localhost:3000/',profile);
  }
}
