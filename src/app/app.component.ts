import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { CounterService } from './services/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService] // provides UsersService to child components
})
export class AppComponent implements OnInit {
  // activeUsers = ['Max', 'Anna'];
  // inactiveUsers = ['Chris', 'Manu'];
  activeUserCount: number;
  inactiveUserCount: number;

  constructor(private counterService: CounterService){

  }

  ngOnInit() {
    this.activeUserCount = this.counterService.activeCounter;
    this.inactiveUserCount = this.counterService.inactiveCounter;
    this.counterService.activeCounterEventEmitter.subscribe(count => this.updateActiveUserCount(count));
    this.counterService.inactiveCounterEventEmitter.subscribe(count => this.updateinActiveUserCount(count));
  }

  // Without these functions, the string interpolation doesn't get updated when the
  // count values change
  updateActiveUserCount(newActiveCount) {
    this.activeUserCount = newActiveCount;
  }

  updateinActiveUserCount(newinActiveCount) {
    this.inactiveUserCount = newinActiveCount;
  }

  // onSetToInactive(id: number) {
  //   this.inactiveUsers.push(this.activeUsers[id]);
  //   this.activeUsers.splice(id, 1);
  // }

  // onSetToActive(id: number) {
  //   this.activeUsers.push(this.inactiveUsers[id]);
  //   this.inactiveUsers.splice(id, 1);
  // }
}
