import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { CommonModule } from '@angular/common';
import { ShareserviceService } from './service/shareservice.service';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HttpClientModule,
    CommonModule,
    HomeComponent,
    FormsModule
],
  templateUrl: './app.component.html',
  providers:[ShareserviceService],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HttpClient';
}
