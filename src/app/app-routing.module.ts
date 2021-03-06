import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AnimationsComponent } from "./animations/animations.component";
import { FormsComponent } from "./forms/forms.component";
import { HomeComponent } from "./home/home.component";
import { HttpRequestsComponent } from "./http-requests/http-requests.component";
import { MessagesComponent } from "./messages/messages.component";
import { PipesComponent } from "./pipes/pipes.component";
import { ServersComponent } from "./servers/servers.component";
import { NewSubscriptionsComponent } from "./users/new-subscriptions/new-subscriptions/new-subscriptions.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'messages', component: MessagesComponent },
    { path: 'servers', component: ServersComponent },
    { path: 'users', component: UsersComponent },
    { path: 'users/new-subscriptions', component: NewSubscriptionsComponent },
    { path: 'users/:id/:name', component: UserComponent },
    { path: 'forms', component: FormsComponent },
    { path: 'pipes', component: PipesComponent },
    { path: 'http-requests', component: HttpRequestsComponent },
    { path: 'animations', component: AnimationsComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ], exports: [RouterModule]
})

export class AppRoutingModule {}