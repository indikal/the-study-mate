import { Component } from '@angular/core';
import { FirstServiceService } from 'src/app/services/first-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FirstServiceService]
})
export class AppComponent {
  title = 'the-study-mate';

  constructor() {
  }
}
