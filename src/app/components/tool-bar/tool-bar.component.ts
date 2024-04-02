import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent {

constructor(private router : Router){

}

  selected_route(){
    var selected_route = this.router.url.split('/')[1]
    switch(selected_route){
      case "competences":
        return 1;
      case "about-me":
        return 2;
      case "my-experiences":
        return 3
      case "contacts":
        return 4
      default:
        return 0
    }
  }
}
