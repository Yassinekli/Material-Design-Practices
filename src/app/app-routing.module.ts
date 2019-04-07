import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountComponent } from "./content/account/account.component";
import { SettingsComponent } from "./content/settings/settings.component";

const routes: Routes = [
  { path: "account", component: AccountComponent },
  { path: "setting", component: SettingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
