import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class UserActionsCounter {
    count: number = 0;

    countUserActions() {
        this.count += 1;
        // console.log(this.count);
    }
}