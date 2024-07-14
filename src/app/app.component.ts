import { Component } from '@angular/core';
import { RouterOutlet,RouterLink, } from '@angular/router';
import { DatePipe,DecimalPipe } from '@angular/common';
import {ReactiveFormsModule,FormControl,Validators,FormGroup} from '@angular/forms';
import { first } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,DatePipe ,DecimalPipe,ReactiveFormsModule, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hello-angular';
  name = 'prapt';
  imageCoverUrl = '/todo-list.png';

  onImageClick() {
    alert()
  }

  major = "programmer";

  items = ["A","B","C","D","E","F",];
  size = 'S';
  sizelist = ["S","M","M","S","L","XL",];

  now = new Date();
  number = 1500.5;

  names = new FormControl('')
  profileForm = new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required)
  })
  profileFormSubmit() {
    console.log(this.profileForm.valid)
    console.log(this.profileForm.value)
  }

}
