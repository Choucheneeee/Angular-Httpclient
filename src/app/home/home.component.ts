import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShareserviceService } from '../service/shareservice.service';
import { Subscription } from 'rxjs';
import { emit } from 'node:process';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
  d: any[] = [];  // 'd' is an array of 'any'
  student: any;
  dataobservab!: Subscription;
  dataoneobservab!: Subscription;
  profile={
    name: 'zzzzzz',
    age: 30,
    email:'xxxxxx@getMaxListeners.com',
    phone:'123455'

  }
  newst={
    name:"choucha",
    age:999,
    email:"o@gmail.com",
    phone:222
  }
  constructor(private share: ShareserviceService) {}

  ngOnInit(): void {
      this.dataobservab = this.share.getstudents().subscribe((data: any) => {
        console.log('Raw data:', data);
        this.d = Array.isArray(data) ? data : []; // If the data is not an array, fallback to empty array
      });
      
      // this.share.addNewStudent(this.profile).subscribe((data)=>{
      //   console.log(data)
      // })
      // this.share.DeleteStudent('67653e7d9356b3dfe220c7fb').subscribe((data)=>{
      //   console.log("deleted")
      //   console.log(data)
        
      // })
      // this.dataoneobservab = this.share.getOneStudent('67653e7d9356b3dfe220c7fb').subscribe((data: any) => {
      //   console.log('Raw data2:', data);
      //   this.student = data; // Check the structure of 'data' to ensure it's correct
      // });
      // this.share.PatchStudent(this.newst,'67653e8574e4ae3e486a0ac6').subscribe((data:any)=>{
      //   console.log('update',data)
      // })

  }
  ngOnDestroy(): void {
    this.dataobservab.unsubscribe()
      
  }


  
}
