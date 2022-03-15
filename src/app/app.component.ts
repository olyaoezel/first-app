import { Component,  OnInit,  } from '@angular/core';
import { ActivateService } from './services/activate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent implements OnInit{
  openDropdown = false;
  
  
  
  constructor(private activate: ActivateService) { }
  
  ngOnInit() {
    
  }

  
}
