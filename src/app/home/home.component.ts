import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';

import { map } from 'rxjs/operators';
import { ActivateService } from '../services/activate.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  guestName = '';
  value: number = 10;
 
   userActivated = false;
  private activatedSub: Subscription;

  private firstObsSubscription: Subscription;
  
  constructor(private activate: ActivateService) { }

  ngOnInit() {
    // this.firstObsSubscription = interval(1000).subscribe(count => {
      // console.log(count)
    // })

    const customIntervalObservable = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 2) {
          observer.complete(); //after complete Observable doesn't reach the error handler
        }
        if (count > 3) {
          observer.error(new Error('Count is greater 3!')) // an error cancels the Observable, it doesn't complete it
        }
        count++;
      }, 1000);
      
    })

    this.firstObsSubscription = customIntervalObservable.pipe(map((data: number) => {
      return 'Round: ' + (data + 1);
    })).subscribe((data:number) => {
      console.log(data);
    }, error => {
      console.log(error);
      alert(error.message);
    }, () => {
      console.log('Completed');
    });

    this.activatedSub = this.activate.activatedEmitter.subscribe(didActivate => {
      this.userActivated = didActivate;
    });

  }

  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
     this.activatedSub.unsubscribe();
  
  }

  greetGuest(event) {
    this.guestName = event.target.value;
  }

  onActivate() {
    this.activate.activatedEmitter.next(true);
  };

}
