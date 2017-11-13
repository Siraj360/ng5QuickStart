import {Component} from '@angular/core';
import { fadeInAnimation } from '../../animate';

@Component({
  selector: 'product',
  templateUrl: './product.html',
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class ProductComponent{

  constructor() {
   
  }


}
