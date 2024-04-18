import { getLocaleTimeFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.scss']
})




export class HomeComponent implements OnInit {

  openingText:string = "Bonjour";

  constructor() { }
  
  ngOnInit() {
    var date = new Date();
    if(date.getHours() < 6 ||date.getHours() > 19){
      this.openingText = "Bonsoir";
    }

  }

  downloadFile() {
    const filePath = `assets/CV.pdf`;
    const link = document.createElement('a');
    link.href = filePath;
    link.download = "CV.pdf";
    link.click();
  }

}
