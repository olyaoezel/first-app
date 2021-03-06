import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { MessagesComponent } from './messages/messages.component';
import { SuccessAlertComponent } from './messages/success-alert/success-alert.component';
import { SecondaryAlertComponent } from './messages/secondary-alert/secondary-alert.component';
import { InfoAlertComponent } from './messages/info-alert/info-alert.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './game-control/odd/odd.component';
import { EvenComponent } from './game-control/even/even.component';
import { BasicHightlightDirective } from './directives/basic-hightlight.directive';
import { UnlessDirective } from './directives/unless.directive';
import { ActiveUsersComponent } from './users/active-users/active-users.component';
import { InactiveUsersComponent } from './users/inactive-users/inactive-users.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { NewSubscriptionsComponent } from './users/new-subscriptions/new-subscriptions/new-subscriptions.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { UserComponent } from './users/user/user.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsComponent } from './forms/forms.component';
import { FormsReactiveComponent } from './forms/forms-reactive/forms-reactive.component';
import { PipesComponent } from './pipes/pipes.component';
import { ShortenPipe } from './pipes/shorten.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { ReversedPipe } from './pipes/reversed.pipe';
import { SortedPipe } from './pipes/sorted.pipe';
import { HttpRequestsComponent } from './http-requests/http-requests.component';
import { AuthInterceptorService } from './interceptors/auth-interceptor.service';
import { LoggingINterceptorService } from './interceptors/logging-interceptor.service';
import { AnimationsComponent } from './animations/animations.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    MessagesComponent,
    SuccessAlertComponent,
    SecondaryAlertComponent,
    InfoAlertComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    BasicHightlightDirective,
    UnlessDirective,
    ActiveUsersComponent,
    InactiveUsersComponent,
    UsersComponent,
    HomeComponent,
    NewSubscriptionsComponent,
    ClickOutsideDirective,
    UserComponent,
    FormsComponent,
    FormsReactiveComponent,
    PipesComponent,
    ShortenPipe,
    FilterPipe,
    ReversedPipe,
    SortedPipe,
    HttpRequestsComponent,
    AnimationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true //multiple services
    },
    {
    provide: HTTP_INTERCEPTORS,
    useClass: LoggingINterceptorService,
    multi: true 
  } //reihenfolge von Interceptors ist wichtig
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
