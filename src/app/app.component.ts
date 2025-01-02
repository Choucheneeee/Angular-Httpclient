import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { CommonModule } from '@angular/common';
import { ShareserviceService } from './service/shareservice.service';
import { FormsModule, NgModel } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HttpClientModule,
    CommonModule,
    AboutComponent,
    HomeModule,
    AboutModule,
    FormsModule
],
  templateUrl: './app.component.html',
  providers:[ShareserviceService],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HttpClient';
}
