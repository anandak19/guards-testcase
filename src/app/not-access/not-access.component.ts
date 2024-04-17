import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';

@Component({
  selector: 'app-not-access',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './not-access.component.html',
  styleUrl: './not-access.component.scss'
})
export class NotAccessComponent {

  constructor(private _location: Location) { }
  goBack(){
    this._location.back(); 
  }

}
