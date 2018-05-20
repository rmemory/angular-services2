import { Injectable, EventEmitter } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService  {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  constructor(private counterService: CounterService) {
    this.counterService.inactiveCounter = this.inactiveUsers.length;
    this.counterService.activeCounter = this.activeUsers.length;
  }

  setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]); // add to inactive
    this.activeUsers.splice(id, 1); // find id, remove it (1) remove from active
    this.counterService.incrementActiveToInactive();
    console.log("this.counterService.inactiveCounter: " + this.counterService.inactiveCounter);
    console.log("this.counterService.activeCounter: " + this.counterService.activeCounter);
  }

  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]); // add to active
    this.inactiveUsers.splice(id, 1); // find id, remove it (1) from inactive
    this.counterService.incrementInactiveToActive();
    console.log("this.counterService.inactiveCounter: " + this.counterService.inactiveCounter);
    console.log("this.counterService.activeCounter: " + this.counterService.activeCounter);
  }
}
