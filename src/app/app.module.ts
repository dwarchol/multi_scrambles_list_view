import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScramblesListComponent } from './scrambles-list/scrambles-list.component';
import { MainPageComponent } from './main-page/main-page.component';
import { USideComponent } from './u-side/u-side.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {TextFieldModule} from '@angular/cdk/text-field';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    ScramblesListComponent,
    MainPageComponent,
    USideComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TextFieldModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
