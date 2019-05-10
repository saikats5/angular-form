import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics=['React', 'Angular', 'Vue'];
  topicHasError = true;
  userModel = new User('saikat', 'saikat@test.com', 1234567890, '', 'morning', true);
  validateTopic(value){
    if(value === 'default'){
      this.topicHasError = true;
    }else{
      this.topicHasError = false;
    }
  }
}
