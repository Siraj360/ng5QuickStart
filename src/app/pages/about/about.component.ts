import {Component} from '@angular/core';
import { GlobalState } from '../../global.state';
import { fadeInAnimation } from '../../animate';

@Component({
  selector: 'about',
  templateUrl: './about.html',
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class AboutComponent {
public title:String = "About this application"
  
  constructor(
      private globalState: GlobalState

  ) {
    this.globalState.notifyDataChanged('Header.title', this.title);
   }


  
}
