import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {PlanSheetComponent} from './check-list/plan-sheet/plan-sheet.component';
import {ItemSectionComponent} from './check-list/plan-sheet/item-section/item-section.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanSheetComponent,
    ItemSectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
