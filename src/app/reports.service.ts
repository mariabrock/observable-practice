import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { Report } from "./report";

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

    _reports$: Observable<Report[]>  = of([
      {
        "id": 1,
        "displayName": "report 1",
        "description": "description 1",
        "uiHandle": "report1",
        "serviceUrl": "test-report-1",
        "ordering": 100,
        "groupId": 1,
        "pinned": false
      },
      {
        "id": 2,
        "displayName": "report 2",
        "description": "description 2",
        "uiHandle": "report2",
        "serviceUrl": "test-report-2",
        "ordering": 200,
        "groupId": 1,
        "pinned": true
      },
      {
        "id": 1,
        "displayName": "report 3",
        "description": "description 3",
        "uiHandle": "report3",
        "serviceUrl": "test-report-3",
        "ordering": 200,
        "groupId": 2,
        "pinned": false
      },
      {
        "id": 2,
        "displayName": "report 4",
        "description": "description 4",
        "uiHandle": "report4",
        "serviceUrl": "test-report-4",
        "ordering": 100,
        "groupId": 2,
        "pinned": false
      }
    ])

}
