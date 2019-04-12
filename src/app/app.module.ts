import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';

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
import { TableComponent } from './content/table/table.component';
import { WelcomeComponent } from './content/welcome/welcome.component';
import { ExpansionComponent } from './content/expansion/expansion.component';

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
    ContactComponent,
    TableComponent,
    WelcomeComponent,
    ExpansionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}