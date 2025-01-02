import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';  // Import the tap operator
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ShareserviceService {

  params=new HttpParams()
  .set('secret','chouchene')
  .set('clientKey','0000')
  header=new HttpHeaders()
  .set("authorization","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NjUzZGRhMWJmZmE1Zjg1MjNhOTVjMCIsImlhdCI6MTczNTgzOTI1NywiZXhwIjoxNzM1ODQyODU3fQ.5WVEcQIw5U2mirU61pe6DoIvFzrqAGCYUgjVMwH1-wA")
  linkbackend=environment.apiBaseUrl
  
  constructor(private http:HttpClient) {

   }


   getstudents() {
    return this.http.get(`${this.linkbackend}/students`,{params:this.params,headers:this.header});  // Assuming this endpoint returns an array
  }

  getOneStudent(id: string){
    return this.http.get(`${this.linkbackend}/students/${id}`);
  }

  addNewStudent(profile:any){
    return this.http.post(`${this.linkbackend}`,profile);
  }
  DeleteStudent(id:any){
    console.log("id,",id)
    return this.http.delete(`${this.linkbackend}/student/${id}`);
  }
  PatchStudent(newst:any,id:any){
    console.log("id,",id)
    return this.http.patch(`${this.linkbackend}/student/${id}`,newst);
  }
}
