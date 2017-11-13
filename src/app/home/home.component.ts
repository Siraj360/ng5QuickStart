import { Component, OnInit } from '@angular/core';
import { ElementRef} from '@angular/core';
import { GlobalState } from '../global.state';
import { fadeInAnimation } from '../animate';
//declare var jQuery:any;

@Component({
  selector: 'home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
    animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class HomeComponent implements OnInit {

public title:String = "Welecome to Angular 5 Quick Start"
  
  constructor(
      private globalState: GlobalState,
      private elementRef: ElementRef
  ) {
    this.globalState.notifyDataChanged('Header.title', this.title);
   }



     ngOnInit() {
       // jquery test - It working!
      /* jQuery(this.elementRef.nativeElement)
        .find('.box')
        .css('border', '3px solid black')
        .on('click', function(e){
               e.preventDefault();
               jQuery(this).css('border-color', 'red');
        
    } );*/
}
}
