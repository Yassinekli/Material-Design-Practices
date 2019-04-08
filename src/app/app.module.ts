import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from "./materials";
import 'hammerjs';
import { ToolBarComponent } from './content/tool-bar/tool-bar.component';
import { ListMenuComponent } from './content/list-menu/list-menu.component';
import { AccountComponent } from './content/account/account.component';
import { SettingsComponent } from './content/settings/settings.component';
import { CardsListComponent } from './content/cards/cards-list/cards-list.component';
import { CardItemComponent } from './content/cards/card-item/card-item.component';
import { HomeComponent } from './content/home/home.component';
import { ContactComponent } from './content/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    ListMenuComponent,
    AccountComponent,
    SettingsComponent,
    CardsListComponent,
    CardItemComponent,
    HomeComponent,
    ContactComponent
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
