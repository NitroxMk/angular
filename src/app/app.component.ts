import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  json =[
    { "titre":"Ford", "content": "desc", "loveit":"-1","createat":"11/05/2020" },
    { "titre":"Ford3", "content": "desc", "loveit":"2","createat":"10/05/2020" },
    { "titre":"Ford4", "content": "desc", "loveit":"-2","createat":"16/05/2020" },
  { "titre":"Ford4", "content": "desc", "loveit":"1","createat":"1/05/2020" }
  ];
  title = 'app';
}
