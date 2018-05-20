import { Injectable, EventEmitter } from '@angular/core';

//injectable not needed here because it uses no other service
export class CounterService {
  activeCounter:number;
  inactiveCounter:number;

  constructor() { }

  activeCounterEventEmitter = new EventEmitter<number>();
  inactiveCounterEventEmitter = new EventEmitter<number>();

  incrementActiveToInactive() {
    this.activeCounter--;
    this.inactiveCounter++;
    this.activeCounterEventEmitter.emit(this.activeCounter);
    this.inactiveCounterEventEmitter.emit(this.inactiveCounter);
    console.log("activeCounter: " + this.activeCounter);
    console.log("inactiveCounter: " + this.inactiveCounter);
  }

  incrementInactiveToActive() {
    this.activeCounter++;
    this.inactiveCounter--;
    this.activeCounterEventEmitter.emit(this.activeCounter);
    this.inactiveCounterEventEmitter.emit(this.inactiveCounter);
    console.log("activeCounter: " + this.activeCounter);
    console.log("activeToInactiveCounter: " + this.inactiveCounter);
  }
}
