import { Component, OnInit } from '@angular/core';
import {TaskApiService} from "../task-api/task-api.service";

@Component({
  selector: 'wcu-plan-sheet',
  templateUrl: './plan-sheet.component.html',
  styleUrls: ['./plan-sheet.component.scss']
})
export class PlanSheetComponent implements OnInit {

  errorMessage: string = '';
  plan = {};

  constructor(private taskApi: TaskApiService) {
    console.log('PLAN:', this.plan);
  }

  ngOnInit() {
    this.taskApi.get().subscribe(
        task => this.plan = task[0],
        error => this.errorMessage = <any>error
    )
  }
}
