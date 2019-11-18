import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-info',
  templateUrl: './work-info.component.html',
  styleUrls: ['./work-info.component.scss']
})
export class WorkInfoComponent implements OnInit {

   jobs = [
    {
      name: "Cheesecake Factory",
      title: "Server & Busser",
      task1: "Clean and maintain restaurant",
      task2: "Assure Guest Satisfaction",
    },
]

  constructor() { }

  ngOnInit() {
  }

}