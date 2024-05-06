import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Registration Form';

  displayname = '';
  displayaddress = '';
  displayemail = '';
  displaycontact = '';

  getValue(name:string, address:string, email:string, contact:string){
    this.displayname = name;
    this.displayaddress = address;
    this.displayemail = email;
    this.displaycontact = contact;
  }
  
}