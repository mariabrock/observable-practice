import { Routes } from '@angular/router';
import { ReportDisplayComponent } from "./report-display/report-display.component";

export const routes: Routes = [
	{ path: 'report-list', component: ReportDisplayComponent },
	{ path: '',   redirectTo: '/report-list', pathMatch: 'full' },
];
