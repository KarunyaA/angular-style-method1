import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],

})
export class AppComponent  {

  // For single highlight:

  singleString = 'London Kings Cross Station';
  highlightStart = 3;
  highlightLength = 5;


  // For multiple highlights:

  textStrings = ['London Kings Cross Station', 'Bristol Temple Meads'];
  stylePositions = [[3,3],[15,3]]; // Start position and length of sections to be styled
}
