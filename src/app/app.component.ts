import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'volz-resume';
  Name = {
    first: 'Alec',
    last: 'Volz'
  }
  
  alec = {
    headerInfo:{

    },
    jobs:[
      {
        title: "Cheesecake Factory, 1000 Ross Park Mall Dr, Pittsburgh, PA 15237 (412)-358-9730",
        desc: "Server and Busser"
      },
    ],
    footerInfo:{
    }
    }
  }