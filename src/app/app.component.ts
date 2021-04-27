import { Component } from '@angular/core';
import { WeightEntriesService } from './weigth-entries.service';


@Component({
  selector: 'hm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // inject the service (as parameter) into constructor
  constructor(public entriesService: WeightEntriesService) {}

  ngOnInit() {
  }
  
}
