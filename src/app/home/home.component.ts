import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShareserviceService } from '../service/shareservice.service';
import { Subscription } from 'rxjs';

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
  // dataoneobservab!: Subscription;
  profile={
    name: 'zzzzzz',
    age: 30,
    email:'xxxxxx@getMaxListeners.com',
    phone:'123455'

  }
  constructor(private share: ShareserviceService) {}

  ngOnInit(): void {
      this.dataobservab = this.share.getstudents().subscribe((data: any) => {
        console.log('Raw data:', data);
        this.d = Array.isArray(data) ? data : []; // If the data is not an array, fallback to empty array
      });
      
      this.share.addNewStudent(this.profile).subscribe((data)=>{
        console.log(data)
      })
      // this.dataoneobservab = this.share.getOneStudent('676421fa7fc454331f551908').subscribe((data: any) => {
      //   console.log('Raw data2:', data);
      //   this.student = data; // Check the structure of 'data' to ensure it's correct
      // });

  }
  ngOnDestroy(): void {
    this.dataobservab.unsubscribe()
      
  }

  
}
