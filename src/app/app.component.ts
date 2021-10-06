import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isVisible: boolean = false;
  type: string = "info";
  message: string = "";
  
  onClick(e) {
    this.type = "success";
     this.message = "My Message";
     this.isVisible = true;
  }
}
