import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PlanSheetComponent } from './plan-sheet/plan-sheet.component';
import { ItemSectionComponent } from './plan-sheet/item-section/item-section.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    PlanSheetComponent,
    ItemSectionComponent
  ],
  exports: [
    PlanSheetComponent
  ]
})
export class CheckListModule { }
