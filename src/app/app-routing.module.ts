import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./content/home/home.component";
import { AccountComponent } from "./content/account/account.component";
import { ContactComponent } from "./content/contact/contact.component";
import { SettingsComponent } from "./content/settings/settings.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "account", component: AccountComponent },
  { path: "contact", component: ContactComponent },
  { path: "setting", component: SettingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
