import { Component, inject, OnInit } from '@angular/core';
import { ReportsService } from "../reports.service";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";
import { Report} from "../report";

@Component({
  selector: 'app-report-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './report-display.component.html',
  styleUrl: './report-display.component.css'
})

export class ReportDisplayComponent implements OnInit{

  public unpinnedReports: Report[] = [];
  public pinnedReports: Report[] = [];
  public allReports: Report[] = [];

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

}
// https://stackoverflow.com/questions/53100985/how-to-convert-hard-coded-array-to-observablet-in-angular-6

// https://stackoverflow.com/questions/35527500/angular2-convert-array-to-observable
