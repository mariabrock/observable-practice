import { Component, inject, OnInit } from '@angular/core';
import { ReportsService } from "../reports.service";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";
import { Report} from "../report";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { MatCard } from "@angular/material/card";
import { filter, map } from "rxjs";

@Component({
  selector: 'app-report-display',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatIconModule,
    MatInput,
    MatCard
  ],
  templateUrl: './report-display.component.html',
  styleUrl: './report-display.component.css'
})

export class ReportDisplayComponent implements OnInit{

  public unpinnedReports: Report[] = [];
  public pinnedReports: Report[] = [];
  public allReports: Report[] = [];

  public filters = ['one', 'two', 'three']

  public reportsService = inject(ReportsService);
  public router = inject(Router);

  constructor() {}

  ngOnInit() {
    this.getReports();
  }

  getReports() {
    this.reportsService._reports$
      .subscribe( res => {
      console.log(res)
        this.allReports = res;
      // this.allReports.forEach((report) => {
      //
      // })

  })
  }


  goToReport() {
    this.router.navigate(['/app']);
    console.log('going to a report')
  }

  sort() {
  this.reportsService._reports$.subscribe(res => {
      res.groupName
    }
  )
  }

}
// https://stackoverflow.com/questions/53100985/how-to-convert-hard-coded-array-to-observablet-in-angular-6

// https://stackoverflow.com/questions/35527500/angular2-convert-array-to-observable
