import {Component} from '@angular/core';
import {InstagramService} from '@services/instagram.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private service: InstagramService) {
  }


  login() {
    this.service.loginToInstagram();
  }

}
