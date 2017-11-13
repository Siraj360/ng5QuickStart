import {Component} from '@angular/core';
import { GlobalState } from '../../global.state';
import { UserRxService } from '../../services/user.rx.service';
import { User } from '../../models/user';
import { fadeInAnimation } from '../../animate';
import { Http } from '@angular/http';


@Component({
  selector: 'user',
  templateUrl: './user.html',
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' },
  providers:[UserRxService]
})
export class UserComponent {
public title:String = "User Profiles"
  
  constructor(
      private globalState: GlobalState,
      private userRxService: UserRxService

  ) {
    this.globalState.notifyDataChanged('Header.title', this.title);
   }

public users: User[];
  
   getData() {

        this.userRxService.getUsers()
        .subscribe(
              users => { this.users = users},
              err => console.error(err),
              () => console.log('done')
        );

  }


  ngOnInit() {

    this.getData();


  }
  
  
}
