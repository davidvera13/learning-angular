import { Component } from '@angular/core';
import {AnalyticsService} from "../../../services/analytics/analytics.service";
import {HighlightDirective} from "../../../directives/highlight.directive";
// import {SharedModule} from "../../../shared/shared/shared.module";

@Component({
  standalone: true,
  imports: [
    HighlightDirective
    // SharedModule
  ],
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  // providers: [AnalyticsService] // we can pass service in providers array, and not set service injectable in root
})
export class DetailsComponent {
  constructor(private analyticsService: AnalyticsService) {}

  onClick() {
    this.analyticsService.registerClick();
  }
}

