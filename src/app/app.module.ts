import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from "./materials";
import 'hammerjs';
import { ToolBarComponent } from './content/tab-nav/tool-bar.component';
import { ListMenuComponent } from './content/list-menu/list-menu.component';
import { AccountComponent } from './content/account/account.component';
import { SettingsComponent } from './content/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    ListMenuComponent,
    AccountComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
